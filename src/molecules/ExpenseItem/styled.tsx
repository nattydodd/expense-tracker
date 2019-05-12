import styled from 'styled-components';

export const StyledExpenseItem = styled.div`
  width: 100%;
  display: flex;

  .item {
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  .text {
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px;
  }

  .name {
    width: 60%
  }

  .amount {
    width: 40%;
  }

  .edit-wrapper {
    width: 98px;

    button {
      width: 100%;
    }
  }

  button + button {
    margin-left: 8px;
  }
`;
