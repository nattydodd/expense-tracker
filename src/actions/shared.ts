import { fakeExpenses, IExpense } from '../utils/mockData';
import { 
  receiveExpenses,
  addExpense,
  deleteExpense,
  updateExpense
} from './expenses';

export function _getExpenses() {
  return (dispatch: any) => {
    return dispatch(receiveExpenses(fakeExpenses));
  }
}

export function _saveNewExpense(expense: IExpense) {
  return (dispatch: any) => {
    return dispatch(addExpense(expense));
  }
}

export function _deleteExpense(expenseId: string) {
  return (dispatch: any) => {
    return dispatch(deleteExpense(expenseId));
  }
}

export function _updateExpense(expense: IExpense) {
  return (dispatch: any) => {
    return dispatch(updateExpense(expense));
  }
}