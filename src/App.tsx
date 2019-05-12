import * as React from 'react';
import './App.css';
import InputUnit from './molecules/InputUnit';
import Button from './atoms/Button';
import Input from './atoms/Input';
import InputCurrencySymbol from './atoms/InputCurrencySymbol';
import ExpenseItemManager from './organisms/ExpenseItemManager';

const fakeExpenses = [
  {
    id: 0,
    name: 'groceries May 5th',
    amount: 40,
    currency: '€'
  },
  {
    id: 1,
    name: 'new headphones',
    amount: 109,
    currency: '€'
  },
  {
    id: 2,
    name: 'Starbucks May 7th',
    amount: 8.50,
    currency: '€'
  }
]

const App: React.FC = () => {
  return (
    <div style={{
      width: '450px',
      margin: '0 auto 24px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{textAlign: 'center'}}>Monthly Expenses</h1>
      <h2 style={{textAlign: 'center'}}>Summary</h2>
      <ul style={{
        paddingLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {fakeExpenses.map(expense => (
          <ExpenseItemManager
            key={expense.id}
            expense={expense}
          />
        ))}
      </ul>
      <Button buttonType="primary">
        Add New Expense
      </Button>
      <InputUnit
        post={
          <React.Fragment>
            <Button buttonType='plus'/>
            <Button buttonType='delete'/>
          </React.Fragment>
        }
      input={<Input placeholder="What did you buy?" id="expense" />}
        label="Title"
      />
      <InputUnit
        post={
          <React.Fragment>
            <Button buttonType='confirm'/>
            <Button buttonType='delete'/>
          </React.Fragment>
        }
      input={
        <Input
          placeholder="How much did it cost?"
          id="cost"
          suffix={<InputCurrencySymbol symbol='€'/>}
        />
      }
      label="Amount"
      />
    </div>
  );
}

export default App;
