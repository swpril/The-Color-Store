import React from 'react';
import { Delete as DeleteIcon } from '@material-ui/icons';

import { SortableElement } from 'react-sortable-hoc';

import useStyles from './draggable-color-box.styles';

const DraggableColorBox = SortableElement(props => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={props.handleClick}
        />
      </div>
    </div>
  );
});

export { DraggableColorBox };
