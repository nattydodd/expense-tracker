
import * as React from 'react';
import ExpenseItem from '../../molecules/ExpenseItem';
import ExpenseItemEditable from '../../molecules/ExpenseItemEditable';
import { StyledExpenseItemManager } from './styled';
import { _deleteExpense } from '../../../actions/shared';
import { connect } from 'react-redux';
interface IProps {
  expense: any;
  dispatch: (action: any) => any
}

class ExpenseItemManager extends React.Component<IProps> {
  state = {
    editable: false
  }

  saveEdits() {
    this.setState({ editable: false });
  }

  handleDeleteExpense() {
    const expenseId = this.props.expense.id
    this.props.dispatch(_deleteExpense(expenseId));
  }

  render() {
    const { expense } = this.props;
    const { editable } = this.state;

    return (
      <StyledExpenseItemManager>
        {editable ?
          <ExpenseItemEditable
            expense={expense}
            clickDelete={this.handleDeleteExpense.bind(this)}
            clickConfirm={this.saveEdits.bind(this)}
          />
        : <ExpenseItem
            onClick={() => this.setState({ editable: true })}
            expense={expense}
          />
        }
      </StyledExpenseItemManager>
    )
  }
}

export default connect()(ExpenseItemManager);
