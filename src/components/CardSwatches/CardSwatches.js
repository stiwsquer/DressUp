import React from "react";
import { StyledCardSwatches } from "./CardSwatches.style";
export default function CardSwatches({ imagesSources, onInputRadioClick }) {
  return (
    <StyledCardSwatches>
      {imagesSources.map((source, index) => {
        return (
          <div key={index} className="radio">
            <input
              onClick={onInputRadioClick}
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
    </StyledCardSwatches>
  );
}
