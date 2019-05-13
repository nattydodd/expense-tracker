import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE } from '../actions/expenses';
import { IExpense } from '../utils/mockData';

export default function users(state = [], action: any) {
  switch(action.type) {
    case GET_EXPENSES:
      return action.expenses
    case ADD_EXPENSE:
      return [
        ...state,
        Object.assign({}, action.expense)
      ];
    case DELETE_EXPENSE:
      return state.filter((expense: IExpense) => 
        expense.id !== action.expenseId
      );
    default:
      return state
  }
}