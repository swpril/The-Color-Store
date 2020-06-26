import React from 'react';
import { Delete as DeleteIcon } from '@material-ui/icons';
import useStyles from '../Styles/DraggableColorBox';
import { IconButton } from '@material-ui/core';

const DraggableColorBox = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={classes.deleteIcon} />
            </div>
        </div>
    )
};

export default DraggableColorBox;