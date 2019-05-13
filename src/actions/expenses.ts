import { IExpense } from "../utils/mockData";

export const GET_EXPENSES = 'GET_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function receiveExpenses(expenses: IExpense[]) {
  return {
    type: GET_EXPENSES,
    expenses
  }
}

export function addExpense(expense: IExpense) {
  return {
    type: ADD_EXPENSE,
    expense
  }
}

export function deleteExpense(expenseId: string) {
  return {
    type: DELETE_EXPENSE,
    expenseId
  }
}