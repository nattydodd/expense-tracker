import { storiesOf } from '@storybook/react';
import * as React from 'react'; 
import InputUnit from './index';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

storiesOf('molecules/InputUnit', module)
  .add('Use cases of input unit', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <InputUnit
        post={[
          <Button buttonType='plus'/>,
          <Button buttonType='delete'/>
        ]}
        input={<Input placeholder="What did you buy?" id="expense"/>}
        label="New Expense"
      />
    </div>
  ));