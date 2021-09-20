import React from "react";
import { StyledButton } from "./Button.style";

export default React.memo(function Button({
  children,
  type,
  className,
  onClick,
}) {
  return (
    <StyledButton onClick={onClick} className={className} type={type}>
      {children}
    </StyledButton>
  );
});
