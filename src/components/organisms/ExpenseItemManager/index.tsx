
import * as React from 'react';
import ExpenseItem from '../../molecules/ExpenseItem';
import ExpenseItemEditable from '../../molecules/ExpenseItemEditable';
import { StyledExpenseItemManager } from './styled';

interface IProps {
  expense: any;
}

class ExpenseItemManager extends React.Component<IProps> {
  state = {
    editable: false
  }

  saveEdits() {
    this.setState({ editable: false });
  }

  render() {
    const { expense } = this.props;
    const { editable } = this.state;

    return (
      <StyledExpenseItemManager>
        {editable ?
          <ExpenseItemEditable
            expense={expense}
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

export default ExpenseItemManager;
