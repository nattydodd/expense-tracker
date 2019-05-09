import styled, { css } from 'styled-components';

export const baseButton = css`
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

  &:hover {
    cursor:pointer; 
  }

  &:hover,
  &:active,
  &:focus {
    outline: 1px solid transparent;
  }

  &:active {
    transform: translate(0, 1px);
  }
`;

export const primaryButton = css`
  background-color: #00bcd4;

  &:hover {
    background-color: #028ea0;
  }
`;

export const secondaryButton = css`
  background-color: #e8be1b;

  &:hover {
    background-color: #c5a218;
  }
`;

export const StyledButton = styled.button`
  ${baseButton}

  &.primary {
    ${primaryButton}
  }

  &.secondary {
    ${secondaryButton}
  }
`;