import * as React from 'react';
import { StyledExpenseItem } from './styled';
import Button from '../../atoms/Button';

interface IProps {
  expense: any;
  onClick: () => void;
}

const ExpenseItem: React.FC<IProps> = ({
  expense,
  onClick
 }) => {
  return (
    <StyledExpenseItem>
      <div className="item">
        <p className="text name">
          {expense.name}
        </p>
        <p className="text amount">
          {expense.currency}{expense.amount}
        </p>
      </div>
      <div className="edit-wrapper">
        <Button buttonType="edit" onClick={onClick} />
      </div>
    </StyledExpenseItem>
  );
}

export default ExpenseItem;