import * as React from 'react';
import { StyledInput } from './styled';

interface IProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: () => void;
  onFocus?: () => void;
  id: string;
  prefix?: any;
  suffix?: any;
}

const Input: React.FC<IProps> = ({
   placeholder,
   disabled,
   value,
   onChange,
   onFocus,
   id,
   prefix,
   suffix
 }) => {
  return (
    <React.Fragment>
      {prefix}
      <StyledInput
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {suffix}
    </React.Fragment>
  );
}

export default Input;