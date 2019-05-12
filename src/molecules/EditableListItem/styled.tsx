import styled from 'styled-components';

export const StyledEditableListItem = styled.li`
  display: flex;
  margin-bottom: 24px;
  width: 100%;

  .item {
    margin-right: 8px;
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  button + button {
    margin-left: 8px;
  }
`;
