import React from 'react';
import useStyles from '../Styles/DraggableColorBox';

const DraggableColorBox = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            {props.color}
        </div>
    )
};

export default DraggableColorBox;