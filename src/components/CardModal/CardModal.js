import Button from "../Button/Button";
import React, { useEffect, useMemo } from "react";
import ReactDom from "react-dom";
// import "./style.scss";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
// import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import {
  Overlay,
  Modal,
  Slider,
  Description,
  ModalCloseButton,
} from "./CardModal.style";

export default React.memo(function CardModal({
  children,
  open,
  setIsModalOpen,
  imagesSources,
}) {
  if (!open) return null;

  const breakPoints = useMemo(() => {
    return [{ width: 1, itemsToShow: 1 }];
  }, []);

  const images = useMemo(() => {
    const temporaryImages = [];
    imagesSources.forEach((source) => {
      temporaryImages.push(<img key={source.src} src={source.src} alt="" />);
      temporaryImages.push(
        <img key={source.srcHover} src={source.srcHover} alt="" />
      );
    });
    return temporaryImages;
  }, []);

  return ReactDom.createPortal(
    <>
      <Overlay></Overlay>
      <OutsideAlerter setShowElement={setIsModalOpen}>
        <Modal>
          <ModalCloseButton onClick={() => setIsModalOpen(false)}>
            <i className="fas fa-times"></i>
          </ModalCloseButton>
          {children}
          <Slider>
            <Carousel breakPoints={breakPoints}>{images}</Carousel>
          </Slider>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            voluptate, voluptatum voluptates aperiam culpa sint, tenetur esse,
            minus reiciendis praesentium recusandae deleniti error consequatur
            rem mollitia dolorem perferendis at blanditiis sapiente quibusdam.
            Enim nostrum non impedit magni at animi, facere, eos id distinctio
            ipsa minus itaque earum! Ratione, molestias dolorum fugit expedita
            libero veniam natus non perspiciatis aliquid sit ea provident
            asperiores quas magnam molestiae, eaque at modi similique dolore!
            Quae magni esse officiis deserunt necessitatibus. Itaque deleniti
            quas ea, dignissimos tempore repudiandae minus debitis rem fugiat
            exercitationem tenetur veritatis eaque expedita natus, nesciunt in
            qui hic. Labore cupiditate, sunt ad, blanditiis nihil vel magni
            expedita dolores dolore doloremque consequatur iure neque ab
            explicabo perferendis natus error cumque. Laudantium velit quas
            asperiores. Magnam culpa fuga nihil iusto eaque itaque nemo
            necessitatibus exercitationem nostrum non, obcaecati dignissimos
            tempore eveniet quibusdam iste neque at officia. Voluptate
            temporibus architecto dolores laborum velit veritatis!
          </Description>
        </Modal>
      </OutsideAlerter>
    </>,
    document.getElementById("portal")
  );
});
