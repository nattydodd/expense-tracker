import * as React from 'react';
import Button from '../../atoms/Button';
import InputUnit from '../InputUnit';
import Input from '../../atoms/Input';
import InputCurrencySymbol from '../../atoms/InputCurrencySymbol';

interface IProps {
  expense: any;
  clickConfirm: () => void;
  clickDelete: () => void;
}

const ExpenseItemEditable: React.FC<IProps> = ({
  expense,
  clickConfirm,
  clickDelete
 }) => {
  return (
    <React.Fragment>
      <InputUnit
        post={
          <React.Fragment>
            <Button buttonType='confirm' onClick={clickConfirm} />
            <Button buttonType='delete' onClick={clickDelete}/>
          </React.Fragment>
        }
        input={
          <React.Fragment>
            <Input
              inputWidth="60%"
              placeholder="What did you buy?"
              value={expense.name}
            />
            <Input
              inputWidth="40%"
              placeholder="How Much?"
              value={expense.amount}
              suffix={
                <InputCurrencySymbol symbol='€' />
              }
            />
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default ExpenseItemEditable;