import styled from 'styled-components';

export const StyledExpenseSummary = styled.div`
  width: 450px;
  margin: 24px auto 24px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 0;
  }

  h1, h2 {
    text-align: center
  }

  .expense-item-list {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 0;
  }
`;