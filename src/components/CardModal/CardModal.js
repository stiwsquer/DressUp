import React, { useMemo, useState } from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import ResponsiveCarousel from '../ResponsiveCarousel/ResponsiveCarousel';
import CardSwatches from '../CardSwatches/CardSwatches';
import {
  Overlay,
  Modal,
  Slider,
  Description,
  ModalCloseButton,
  ModalBody,
  Adjust,
} from './CardModal.style';

export default React.memo(
  ({ open, setIsModalOpen, imagesSources, title, text }) => {
    if (!open) return null;

    const [quantity, setQuantity] = useState(0);

    const addOne = () => {
      setQuantity(quantity + 1);
    };

    const subtractOne = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };

    const images = useMemo(() => {
      const temporaryImages = [];
      imagesSources.forEach((source) => {
        temporaryImages.push(<img key={source.src} src={source.src} alt="" />);
        temporaryImages.push(
          <img key={source.srcHover} src={source.srcHover} alt="" />,
        );
      });

      return temporaryImages;
    }, []);

    return ReactDom.createPortal(
      <>
        <Overlay />
        <OutsideAlerter setShowElement={setIsModalOpen}>
          <Modal>
            <ModalCloseButton onClick={() => setIsModalOpen(false)}>
              <i className="fas fa-times" />
            </ModalCloseButton>

            <ModalBody>
              <Slider>
                <ResponsiveCarousel>{images}</ResponsiveCarousel>
              </Slider>
              <Description>
                <h1>{title}</h1>
                <h2>{text}</h2>
                <p>
                  You&apos;re going to be wildly in love with the Tame My Heart
                  Leopard Tie-Front Dress! This cute dress is designed with a
                  lightweight and stretchy knit in a trendy leopard print. It
                  features a crew neckline, short sleeves, and a relaxed fit
                  with a functional tie front detail. Style the Tame My Heart
                  Dress with sneakers for a more casual look, or dress it up
                  with heels and a gold jewelry!
                </p>
                <Adjust>
                  <form>
                    <span>
                      <p>COLOR:</p>
                      <CardSwatches imagesSources={imagesSources} />
                    </span>
                    <span>
                      <p>SIZE:</p>
                      <Button>Small</Button>
                      <Button>Medium</Button>
                      <Button>Large</Button>
                    </span>
                    <span className="quantity">
                      <p>QUANTITY:</p>
                      <Button onClick={subtractOne}>-</Button>
                      <span>{quantity}</span>
                      <Button onClick={addOne}>+</Button>
                    </span>
                    <Button type="submit">ADD TO CART</Button>
                  </form>
                </Adjust>
              </Description>
            </ModalBody>
          </Modal>
        </OutsideAlerter>
      </>,
      document.getElementById('portal'),
    );
  },
);
