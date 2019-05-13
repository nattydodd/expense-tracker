import { fakeExpenses, IExpense } from '../utils/mockData';
import { receiveExpenses, addExpense } from './expenses';

export function getExpenses() {
  return (dispatch: any) => {
    return dispatch(receiveExpenses(fakeExpenses));
  }
}

export function saveNewExpense(expense: IExpense) {
  return (dispatch: any) => {
    return dispatch(addExpense(expense));
  }
}