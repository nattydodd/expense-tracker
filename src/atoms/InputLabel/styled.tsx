import styled, { css } from 'styled-components';

export const baseLabel = css`
  font-size: 16px;
  font-family: BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  margin-bottom: 8px;
  display: block;
`;

export const StyledInputLabel = styled.label`
  ${baseLabel}
`;
