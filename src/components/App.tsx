import * as React from 'react';
import ExpenseItemManager from './organisms/ExpenseItemManager';
import NewExpenseManager from './organisms/NewExpenseManager';
import { connect } from 'react-redux';
import { getExpenses } from '../actions/shared';
import { IExpense } from '../utils/mockData';

interface IProps {
  dispatch: (action: any) => any,
  expenses?: IExpense[]
}

class App extends React.Component<IProps> {
  componentWillMount() {
    this.props.dispatch(getExpenses());
  }

  render() {
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
          {this.props.expenses && this.props.expenses.length && this.props.expenses.map((expense: IExpense) => (
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
}

function mapStateToProps({ expenses }: { expenses: IExpense[]}) {
  return {
    expenses
  }
}

export default connect(mapStateToProps)(App);
