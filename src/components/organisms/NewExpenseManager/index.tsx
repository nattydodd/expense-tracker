import * as React from 'react';
import InputUnit from '../../molecules/InputUnit';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputCurrencySymbol from '../../atoms/InputCurrencySymbol';
import { StyledNewExpenseManager } from './styled';

class NewExpenseManager extends React.Component {
  state = {
    showInput: false
  }

  addExpense() {
    // Todo: add logic here
    this.setState({showInput: false})
  }

  cancel() {
    this.setState({showInput: false})
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
                  id="expense"
                />
                <Input
                  placeholder="How much?"
                  id="cost"
                  suffix={<InputCurrencySymbol symbol='€'/>}
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

export default NewExpenseManager;