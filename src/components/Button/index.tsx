import * as React from 'react';

interface IProps {
  children?: string;
  type?: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>    
  );
}

export default Button;