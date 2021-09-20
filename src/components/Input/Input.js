import React from "react";
import { InputWrapper } from "./Input.style";
export default React.memo(function Input({
  isRequired,
  inputId,
  inputType,
  placeholder,
  inputValue,
  onInputChange,
  autoFocus,
  children,
}) {
  return (
    <InputWrapper>
      <label htmlFor={inputId}>{children}</label>
      <input
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        required={isRequired}
        autoFocus={autoFocus}
      />
    </InputWrapper>
  );
});
