import { storiesOf } from '@storybook/react';
import * as React from 'react';
import EditableListItem from './index';

storiesOf('molecules/EditableListItem', module)
  .add('Use cases of an editable list item', () => (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <EditableListItem
        item="This is an item"
      />
    </div>
  ));