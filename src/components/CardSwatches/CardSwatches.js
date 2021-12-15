/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StyledCardSwatches } from './CardSwatches.style';

export default function CardSwatches({ imagesSources, onInputRadioClick }) {
  return (
    <StyledCardSwatches>
      {imagesSources.map((source, index) => (
        <div key={source.src} className="radio">
          <input
            onClick={onInputRadioClick}
            value={index}
            id="radio"
            type="radio"
            name="swatch"
          />
          <label htmlFor="" id="radio1" className="radio-label">
            <span
              style={{
                background: source.backgroundColor,
              }}
            />
          </label>
        </div>
      ))}
    </StyledCardSwatches>
  );
}
