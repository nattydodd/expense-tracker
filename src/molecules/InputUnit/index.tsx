import * as React from 'react';
import { StyledInputUnit } from './styled';
import InputLabel from '../../atoms/InputLabel';

interface IProps {
  pre?: any[];
  post?: any[];
  input: any;
  label?: string;
}

const InputUnit: React.FC<IProps> = ({
   pre,
   post,
   input,
   label
 }) => {
  return (
    <StyledInputUnit>
      <InputLabel
        htmlFor={input.props.id}
      >
        {label}
      </InputLabel>
      <div className="input-wrapper">
        {pre && pre.map(item => item)}
        <span className="input">
          {input}
        </span>
        {post && post.map(item => item)}
      </div>
    </StyledInputUnit>
  );
}

export default InputUnit;