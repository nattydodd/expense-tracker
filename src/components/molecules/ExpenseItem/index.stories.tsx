import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ExpenseItem from './index';

const expense = {
  name: "This is an item",
  amount: 30,
  currency: '$'
}

storiesOf('molecules/ExpenseItem', module)
  .add('Use cases of an editable list item', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <ExpenseItem
        expense={expense}
        onClick={() => {}}
      />
    </div>
  ));