import * as React from 'react';
import { StyledEditableListItem } from './styled';
import Button from '../../atoms/Button';

interface IProps {
  item: any;
}

const EditableListItem: React.FC<IProps> = ({
  item
 }) => {
  return (
    <StyledEditableListItem>
      <span className="item">
        {item}
      </span>
      <Button buttonType="edit" />
      <Button buttonType="delete" />
    </StyledEditableListItem>
  );
}

export default EditableListItem;