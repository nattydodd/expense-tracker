import { storiesOf } from '@storybook/react';
import * as React from 'react'; 
import Button from './index';

storiesOf('Components/Button', module)
  .add('Types of buttons', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Button buttonType="primary">
        Primary Button
      </Button>
      <Button buttonType="secondary">
        Secondary Button
      </Button>
      <Button buttonType="edit"/>
      <Button buttonType="plus"/>
    </div>
  ));