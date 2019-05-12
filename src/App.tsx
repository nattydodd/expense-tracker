import * as React from 'react';
import './App.css';
import ExpenseItemManager from './organisms/ExpenseItemManager';
import NewExpenseManager from './organisms/NewExpenseManager';

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
        alignItems: 'center',
        margin: '20px 0 0'
      }}>
        {fakeExpenses.map(expense => (
          <ExpenseItemManager
            key={expense.id}
            expense={expense}
          />
        ))}
      </ul>
      <NewExpenseManager/>
    </div>
  );
}

export default App;
