import styled, { css } from 'styled-components';

export const baseButton = css`
  border: 1px solid transparent;
  line-height: 16px;
  text-align: center;
  height: 42px;
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

export const EditButton = css`
  background-color: #e8be1b;
  min-width: auto;

  &:hover {
    background-color: #c5a218;
  }
`;

export const plusButton = css`
  line-height: 20px;
  padding: 0px 12px 4px;
  font-size: 24px;
  min-width: auto;
  font-weight: 400;
`;

export const StyledButton = styled.button`
  ${baseButton}

  &.primary {
    ${primaryButton}
  }

  &.secondary {
    ${secondaryButton}
  }

  &.edit {
    ${EditButton}
  }

  &.plus {
    ${primaryButton}
    ${plusButton}
  }
`;