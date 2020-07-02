import React from 'react';
import { Delete as DeleteIcon } from '@material-ui/icons';
import useStyles from '../Styles/MiniPalette';

const MiniPalette = (props) => {
    const classes = useStyles();
    const miniColorBoxes = props.colors.map((color) => (
        < div className={classes.miniColor} key={color.name} style={{ backgroundColor: color.color }} />
    ));

    const deletePalette = (e) => {
        e.stopPropagation();
        props.openDialog(props.id)
    };
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={deletePalette}
                    style={{ transition: 'all 0.4s ease-in-out' }}
                />
            </div>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {props.paletteName}
                <span className={classes.emoji}>{props.emoji}</span>
            </h5>
        </div>
    )
};

export default MiniPalette;