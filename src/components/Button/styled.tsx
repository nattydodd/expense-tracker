import styled, { css } from 'styled-components';

export const primaryButton = css`
  background-color: black;
  border: 1px solid transparent;
  line-height: 16px;
  text-align: center;
  height: 48px;
  color: white;
  min-width: 250px;
  position: relative;
  font-weight: 700;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;

  &:hover,
  &:active,
  &:focus {
    outline: 1px solid transparent;
  }
`;

export const StyledButton = styled.button`
  &.primary {
    ${primaryButton}
  }
`;