import { 
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE
} from '../actions/expenses';
import { IExpense } from '../utils/mockData';

export default function users(state = [], action: any) {
  switch(action.type) {
    case GET_EXPENSES:
      return action.expenses
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case DELETE_EXPENSE:
      return state.filter((expense: IExpense) => 
        expense.id !== action.expenseId
      );
    case UPDATE_EXPENSE:
      return state.map((expense: IExpense, index) => {
        if(expense.id === action.expense.id) {
          return {
            ...action.expense
          }
        }
        return expense;
      });
    default:
      return state
  }
}