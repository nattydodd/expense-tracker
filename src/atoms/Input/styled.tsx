import styled, { css } from 'styled-components';

export const baseInput = css`
  height: 45px;
  max-height: 45px;
  padding: 0 16px;
  line-height: 16px;
  min-width: 250px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #dedede;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  ${baseInput}
`;
