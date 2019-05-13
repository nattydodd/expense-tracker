import { GET_EXPENSES } from '../actions/expenses';

export default function users(state = [], action: any) {
  switch(action.type) {
    case GET_EXPENSES:
      return action.expenses
    default:
      return state
  }
}