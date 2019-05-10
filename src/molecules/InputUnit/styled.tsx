import styled, { css } from 'styled-components';

export const inputUnit = css`
  display: flex;
  align-items: center;
`;

export const StyledInputUnit = styled.div`
  ${inputUnit}

  input + button {
    margin-left: 8px;
  }

  button + button {
    margin-left: 8px;
  }
`;
