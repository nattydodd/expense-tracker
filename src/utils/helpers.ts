import { IExpense } from "./mockData";

export function calculateTotals(expenses: ReadonlyArray<IExpense>) {
  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
  const total = expenses.map((item: IExpense) => item.amount).reduce(reducer, 0);
  return total.toFixed(2);
}