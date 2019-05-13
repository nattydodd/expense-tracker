import { storiesOf } from '@storybook/react';
import * as React from 'react'; 
import InputLabel from './index';

storiesOf('atoms/InputLabel', module)
  .add('Labels', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <InputLabel htmlFor="test">
        Test
      </InputLabel>
    </div>
  ));