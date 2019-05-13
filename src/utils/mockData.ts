export interface IExpense {
  id: string,
  name: string,
  amount: number,
  currency: string
}

export const fakeExpenses: IExpense[] = [
  {
    id: '02345',
    name: 'groceries May 5th',
    amount: 40,
    currency: '€'
  },
  {
    id: '53415',
    name: 'new headphones',
    amount: 109,
    currency: '€'
  },
  {
    id: '54642',
    name: 'Starbucks May 7th',
    amount: 8.50,
    currency: '€'
  }
]