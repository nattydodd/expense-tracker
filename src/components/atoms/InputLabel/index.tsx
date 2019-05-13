import * as React from 'react';
import { StyledInputLabel } from './styled';

interface IProps {
  htmlFor: string;
}

const InputLabel: React.FC<IProps> = ({
   children,
   htmlFor
 }) => {
  return (
    <StyledInputLabel 
      htmlFor={htmlFor}
    >
      {children}
    </StyledInputLabel> 
  );
}

export default InputLabel;