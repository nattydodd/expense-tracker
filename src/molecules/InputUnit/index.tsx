import * as React from 'react';
import { StyledInputUnit } from './styled';
import InputLabel from '../../atoms/InputLabel';

interface IProps {
  pre?: any[];
  post?: any[];
  input: any;
  label?: string;
}

const divStyle = {
  margin: '24px 0'
};

const InputUnit: React.FC<IProps> = ({
   pre,
   post,
   input,
   label
 }) => {
  return (
    <div style={divStyle}>
      <InputLabel 
        htmlFor={input.props.id}>
        {label}
      </InputLabel>
      <StyledInputUnit>
        {pre && pre.map(item => item)}
        {input}
        {post && post.map(item => item)}
      </StyledInputUnit>
    </div>
  );
}

export default InputUnit;