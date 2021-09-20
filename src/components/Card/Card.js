import React from "react";
// import "./style.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Button from "../Button/Button";
import CardModal from "../CardModal/CardModal";
import {
  StyledCard,
  CardFigure,
  FigCaption,
  CardButton,
  CardBody,
  CardTitle,
  CardText,
  CardSwatches,
} from "./Card.style";

export default React.memo(function Card({
  linkTo,
  imagesSources,
  title,
  text,
}) {
  const [imgSrc, setImgSrc] = useState(imagesSources[0].src);
  const [imgSrcHover, setImgSrcHover] = useState(imagesSources[0].srcHover);
  const [imgAlt, setImgAlt] = useState(imagesSources[0].imgAlt);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputRadioClick = (e) => {
    setImgSrc(imagesSources[e.target.value].src);
    setImgSrcHover(imagesSources[e.target.value].srcHover);
    setImgAlt(imagesSources[e.target.value].imgAlt);
  };

  return (
    <StyledCard>
      <CardFigure>
        <Link to={linkTo} className="card-image-link">
          <img
            className=" card-image card-image-normal"
            src={imgSrc}
            alt={imgAlt}
          />
          <img
            className="card-image  card-image-alt"
            src={imgSrcHover}
            alt={imgAlt}
          />
        </Link>
        <FigCaption>
          <CardButton
            onClick={() => {
              setIsModalOpen(true);
            }}
          ></CardButton>

          <CardModal
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            imagesSources={imagesSources}
            title={title}
            text={text}
          ></CardModal>
        </FigCaption>
      </CardFigure>
      <CardBody>
        <Link to={linkTo}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardText>{text}</CardText>
      </CardBody>
      <CardSwatches>
        {imagesSources.map((source, index) => {
          return (
            <div key={index} className="radio">
              <input
                onClick={handleInputRadioClick}
                value={index}
                id="radio"
                type="radio"
                name="swatch"
              ></input>
              <label htmlFor="" id="radio1" className="radio-label">
                <span
                  style={{
                    background: source.backgroundColor,
                  }}
                ></span>
              </label>
            </div>
          );
        })}
      </CardSwatches>
    </StyledCard>
  );
});
