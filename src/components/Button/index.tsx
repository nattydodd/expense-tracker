import * as React from 'react';
import { StyledButton } from './styled';

interface IProps {
  children?: string;
  buttonType?: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ children, buttonType, onClick }) => {
  return (
    <StyledButton
      className={buttonType}
      onClick={onClick}
    >
      {children}
    </StyledButton>    
  );
}

export default Button;