import styled from 'styled-components';

interface InputProps {
  readonly inputWidth?: string;
};

export const StyledInput = styled.input<InputProps>`
  height: 45px;
  max-height: 45px;
  padding: 0 16px;
  line-height: 16px;
  width: ${props => props.inputWidth ? props.inputWidth : '100%'}
  border-radius: 4px;
  outline: none;
  border: 2px solid #dedede;
  font-size: 14px;
`;
