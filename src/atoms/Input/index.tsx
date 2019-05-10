import * as React from 'react';
import { StyledInput } from './styled';

interface IProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: () => void;
  onFocus?: () => void;
  id: string;
}

const Input: React.FC<IProps> = ({
   placeholder,
   disabled,
   value,
   onChange,
   onFocus,
   id
 }) => {
  return (
    <StyledInput 
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />  
  );
}

export default Input;