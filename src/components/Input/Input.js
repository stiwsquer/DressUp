import React from 'react';
import { InputWrapper } from './Input.style';

export default React.memo(
  ({
    isRequired,
    inputId,
    inputType,
    placeholder,
    inputValue,
    onChange,
    autoFocus,
    children,
  }) => (
    <InputWrapper>
      <label htmlFor={inputId}>{children}</label>
      <input
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        required={isRequired}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
      />
    </InputWrapper>
  ),
);
