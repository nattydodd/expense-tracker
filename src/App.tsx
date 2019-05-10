import * as React from 'react';
import './App.css';
import InputUnit from './molecules/InputUnit';
import Button from './atoms/Button';
import Input from './atoms/Input';

const App: React.FC = () => {
  return (
    <div>
      <h1>Expense Form</h1>
      <InputUnit
        post={[
          <Button buttonType='plus'/>,
          <Button buttonType='delete'/>
        ]}
        input={<Input placeholder="What did you buy?" id="expense"/>}
        label="Title"
      />
      <InputUnit
        post={[
          <Button buttonType='confirm'/>,
          <Button buttonType='delete'/>
        ]}
        input={<Input placeholder="How much did it cost?" id="cost"/>}
        label="Amount"
      />
    </div>
  );
}

export default App;
