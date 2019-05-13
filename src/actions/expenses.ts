import { IExpense } from "../utils/mockData";

export const GET_EXPENSES = 'GET_EXPENSES';

export interface IExpenseAction {
  type: string,
  expenses: IExpense[]
}

export function receiveExpenses(expenses: IExpense[]) {
  return {
    type: GET_EXPENSES,
    expenses
  }
}