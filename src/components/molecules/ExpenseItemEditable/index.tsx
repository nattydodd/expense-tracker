import * as React from 'react';
import Button from '../../atoms/Button';
import InputUnit from '../InputUnit';
import Input from '../../atoms/Input';
import InputCurrencySymbol from '../../atoms/InputCurrencySymbol';
import { IExpense } from '../../../utils/mockData';
import { _updateExpense } from '../../../actions/shared';
import { connect } from 'react-redux';
import { currencySymbol } from '../../../utils/locale';

interface IProps {
  expense: any;
  clickConfirm: () => void;
  clickDelete: () => void;
  dispatch: (action: any) => any
}

interface IState {
  expense: IExpense
}

class ExpenseItemEditable extends React.Component<IProps> {
  state = {
    expense: this.props.expense
  } as IState

  handleClickConfirm() {
    this.props.dispatch(_updateExpense(this.state.expense));
    this.props.clickConfirm();
  }

  handleUpdateAmount(value: string) {
    this.setState({
      expense: {
        ...this.state.expense,
        amount: parseFloat(value)
      }
    });
  }

  render() {
    const {
      expense,
      clickDelete
    } = this.props
 
    return (
      <React.Fragment>
        <InputUnit
          post={
            <React.Fragment>
              <Button buttonType='confirm' onClick={this.handleClickConfirm.bind(this)} />
              <Button buttonType='delete' onClick={clickDelete}/>
            </React.Fragment>
          }
          input={
            <React.Fragment>
              <Input
                inputWidth="60%"
                placeholder="What did you buy?"
                value={expense.name}
                onChange={(value) => this.setState({
                  expense: {
                    ...expense,
                    name: value
                  }
                })}
              />
              <Input
                inputWidth="40%"
                placeholder="How Much?"
                value={expense.amount}
                type="number"
                onChange={(value) => this.handleUpdateAmount(value)}
                suffix={
                  <InputCurrencySymbol symbol={currencySymbol} />
                }
              />
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default connect()(ExpenseItemEditable);