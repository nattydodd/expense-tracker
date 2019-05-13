import { GET_EXPENSES, ADD_EXPENSE } from '../actions/expenses';

export default function users(state = [], action: any) {
  switch(action.type) {
    case GET_EXPENSES:
      return action.expenses
    case ADD_EXPENSE:
      return state.concat(action.expense)
    default:
      return state
  }
}