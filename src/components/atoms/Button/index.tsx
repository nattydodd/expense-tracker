import * as React from 'react';
import { StyledButton } from './styled';

interface IProps {
  children?: string;
  buttonType?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IProps> = ({ className, children, buttonType, onClick }) => {
  return (
    <StyledButton
      className={`${className} ${buttonType}`}
      onClick={onClick}
    >
      {buttonType === 'edit' ? 'Edit'
        : buttonType === 'plus' ? '+'
        : buttonType === 'delete' ? 'x'
        : buttonType === 'confirm' ? '✓'
        : children}
    </StyledButton>
  );
}

export default Button;