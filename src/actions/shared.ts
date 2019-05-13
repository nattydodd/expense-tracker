import { fakeExpenses } from '../utils/mockData';
import { receiveExpenses } from './expenses';

export function getExpenses() {
  return (dispatch: any) => {
    return dispatch(receiveExpenses(fakeExpenses));
  }
}