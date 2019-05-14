import * as React from 'react';
import ExpenseItemManager from '../../organisms/ExpenseItemManager';
import NewExpenseManager from '../../organisms/NewExpenseManager';
import { connect } from 'react-redux';
import { _getExpenses } from '../../../actions/shared';
import { IExpense } from '../../../utils/mockData';
import { StyledExpenseSummary } from './styled';
import { calculateTotals } from '../../../utils/helpers';
import { currencySymbol } from '../../../utils/locale';

interface IProps {
  dispatch: (action: any) => any,
  expenses?: IExpense[]
}

class ExpenseSummary extends React.Component<IProps> {
  componentWillMount() {
    this.props.dispatch(_getExpenses());
  }

  render() {
    return (
      <StyledExpenseSummary>
        <h1 className="title">Monthly Expenses</h1>
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
        <div className="expense-total">
          <h2>
            Total Spent: {currencySymbol}{this.props.expenses && calculateTotals(this.props.expenses)}
          </h2>
        </div>
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