import React from 'react';
import { StyledButton } from './Button.style';

export default React.memo(({ children, type, className, onClick }) => (
  <StyledButton onClick={onClick} className={className} type={type}>
    {children}
  </StyledButton>
));
