import styled from 'styled-components';

export const StyledInputUnit = styled.div`
  margin: 24px 0;

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  .input {
    position: relative;
  }

  .input ~ button {
    margin-left: 8px;
  }

  button + button {
    margin-left: 8px;
  }
`;
