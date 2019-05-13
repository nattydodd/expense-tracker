import * as React from 'react';
import InputUnit from '../../molecules/InputUnit';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputCurrencySymbol from '../../atoms/InputCurrencySymbol';
import { StyledNewExpenseManager } from './styled';
import { IExpense } from '../../../utils/mockData';
import { v4 as uuid } from 'uuid';
import { _saveNewExpense } from '../../../actions/shared';
import { connect } from 'react-redux';

const currencySymbol = '€';
interface IProps {
  dispatch: (action: any) => any
}

class NewExpenseManager extends React.Component<IProps> {
  state = {
    showInput: false,
    expenseName: '',
    expenseAmount: '',
  }

  updateExpenseName(value: React.ReactText) {
    this.setState({
      expenseName: value
    });
  }

  updateExpenseAmount(value: React.ReactText) {
    this.setState({
      expenseAmount: value
    });
  }

  resetFields() {
    this.setState({
      expenseName: '',
      expenseAmount: ''
    })
  }

  addExpense() {
    const parsedAmount = parseFloat(this.state.expenseAmount);

    const expenseObject: IExpense = {
      id: uuid(),
      name: this.state.expenseName,
      amount: parsedAmount,
      currency: currencySymbol
    }
    
    this.props.dispatch(_saveNewExpense(expenseObject));
    this.setState({showInput: false});
    this.resetFields();
  }

  cancel() {
    this.setState({showInput: false});
  }

  render() {
    const { showInput } = this.state;
    return (
      <StyledNewExpenseManager>
        {showInput ?
          <InputUnit
            post={
              <React.Fragment>
                <Button buttonType='plus'
                  onClick={this.addExpense.bind(this)}
                />
                <Button buttonType='delete'
                 onClick={this.cancel.bind(this)}
                />
              </React.Fragment>
            }
            input={
              <React.Fragment>
                <Input
                  placeholder="What did you buy?"
                  value={this.state.expenseName}
                  onChange={this.updateExpenseName.bind(this)}
                  id="expense"
                />
                <Input
                  placeholder="How much?"
                  value={this.state.expenseAmount}
                  onChange={this.updateExpenseAmount.bind(this)}
                  id="cost"
                  type="number"
                  suffix={<InputCurrencySymbol symbol={currencySymbol} />}
                />
              </React.Fragment>
            }
          />
        : <Button
            buttonType="primary"
            className="new-expense-button"
            onClick={() => this.setState({showInput: true})}
          >
            Add New Expense
          </Button>
        }
      </StyledNewExpenseManager>
    )
  }
}

export default connect()(NewExpenseManager);