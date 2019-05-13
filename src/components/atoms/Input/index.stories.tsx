import { storiesOf } from '@storybook/react';
import * as React from 'react'; 
import Input from './index';

storiesOf('atoms/Input', module)
  .add('Types of inputs', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Input placeholder="test" id="test" />
    </div>
  ));