import * as React from 'react';
import './App.css';
import InputUnit from './molecules/InputUnit';
import Button from './atoms/Button';
import Input from './atoms/Input';
import InputCurrencySymbol from './atoms/InputCurrencySymbol';

const App: React.FC = () => {
  return (
    <div>
      <h1>Monthly Expenses</h1>
      {/* Summary
        Name $Amount Edit delete
        Name $Amount Edit delete
        Name $Amount Edit delete
        Add New
       */}
      <InputUnit
        post={
          <React.Fragment>
            <Button buttonType='plus'/>
            <Button buttonType='delete'/>
          </React.Fragment>
        }
      input={<Input placeholder="What did you buy?" id="expense" />}
        label="Title"
      />
      <InputUnit
        post={
          <React.Fragment>
            <Button buttonType='confirm'/>
            <Button buttonType='delete'/>
          </React.Fragment>
        }
      input={
        <Input
          placeholder="How much did it cost?"
          id="cost"
          suffix={<InputCurrencySymbol symbol='€'/>}
        />
      }
      label="Amount"
      />
    </div>
  );
}

export default App;
