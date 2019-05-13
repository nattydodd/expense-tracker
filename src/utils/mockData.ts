export interface IExpense {
  id: number,
  name: string,
  amount: number,
  currency: string
}

export const fakeExpenses: IExpense[] = [
  {
    id: 0,
    name: 'groceries May 5th',
    amount: 40,
    currency: '€'
  },
  {
    id: 1,
    name: 'new headphones',
    amount: 109,
    currency: '€'
  },
  {
    id: 2,
    name: 'Starbucks May 7th',
    amount: 8.50,
    currency: '€'
  }
]