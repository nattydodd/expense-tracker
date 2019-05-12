import styled from 'styled-components';

export const StyledInputUnit = styled.div`
  margin-top: 24px;

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  .input {
    position: relative;
    flex: 1;
  }

  .input ~ button {
    margin-left: 8px;
  }

  button + button {
    margin-left: 8px;
  }
`;
