import styled, { css } from 'styled-components';

export const baseButton = css`
  border: 1px solid transparent;
  line-height: 16px;
  text-align: center;
  height: 45px;
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
  font-weight: 400;
  min-width: auto;
  width: 45px;
`;

export const confirmButton = css`
  padding: 0px 12px 2px;
  font-size: 22px;
  font-weight: 500;
  background-color: #06d292;

  &:hover {
    background-color: #11a275;
  }
`;

export const deleteButton = css`
  font-size: 22px;
  padding: 0px 0 4px;
  color: black;
  border: 2px solid black;
  text-align: center;

  &:hover {
    background-color: #d2cece;
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

  &.edit {
    ${EditButton}
  }

  &.plus {
    ${primaryButton}
    ${plusButton}
  }

  &.confirm {
    ${plusButton}
    ${confirmButton}
  }

  &.delete {
    ${plusButton}
    ${deleteButton}
  }
`;