import * as React from 'react';
import './App.css';
import Button from './components/Button/index';

function addNewEntry() {
  console.log("test");
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Expense Form</h1>
      <Button
        buttonType="primary"
        onClick={() => addNewEntry()}
      >
        +
      </Button>
    </div>
  );
}

export default App;
