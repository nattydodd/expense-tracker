import { storiesOf } from '@storybook/react';
import * as React from 'react'; 
import Button from './index';

storiesOf('Components/Button', module)
  .addParameters({
    info: {
      text: 'These are the two types of buttons that we currently have. Primary and Secondary',
    },
  })
  .add('Types of buttons', () => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button buttonType="primary">
        Primary Button
      </Button>
      <Button buttonType="secondary">
        Secondary Button
      </Button>
    </div>
  ));