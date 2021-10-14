import React from "react";
import { InputWrapper } from "./Input.style";
export default React.memo(function Input({
  isRequired,
  inputId,
  inputType,
  placeholder,
  inputValue,
  onChange,
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
        onChange={onChange}
        required={isRequired}
        autoFocus={autoFocus}
      />
    </InputWrapper>
  );
});
