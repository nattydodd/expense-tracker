import * as React from 'react';
import ExpenseItemManager from '../../organisms/ExpenseItemManager';
import NewExpenseManager from '../../organisms/NewExpenseManager';
import { connect } from 'react-redux';
import { getExpenses } from '../../../actions/shared';
import { IExpense } from '../../../utils/mockData';
import { StyledExpenseSummary } from './styled';

interface IProps {
  dispatch: (action: any) => any,
  expenses?: IExpense[]
}

class ExpenseSummary extends React.Component<IProps> {
  componentWillMount() {
    this.props.dispatch(getExpenses());
  }

  render() {
    return (
      <StyledExpenseSummary>
        <h1>Monthly Expenses</h1>
        <h2>Summary</h2>
        {/* <ExpenseGoals /> */}
        <ul className="expense-item-list">
          {this.props.expenses && 
            this.props.expenses.length &&
            this.props.expenses.map((expense: IExpense) => (
              <ExpenseItemManager
                key={expense.id}
                expense={expense}
              />
            ))
          }
        </ul>
        <NewExpenseManager/>
        {/* <ExpenseTotals /> */}
      </StyledExpenseSummary>
    );
  }
}

function mapStateToProps({ expenses }: { expenses: IExpense[]}) {
  return {
    expenses
  }
}

export default connect(mapStateToProps)(ExpenseSummary);