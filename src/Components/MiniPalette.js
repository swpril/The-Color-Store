import React from 'react';
import useStyles from '../Styles/MiniPalette';

const MiniPalette = (props) => {
    const classes = useStyles();
    const miniColorBoxes = props.colors.map((color) => (
        < div className={classes.miniColor} key={color.name} style={{ backgroundColor: color.color }}>

        </div >
    ))
    return (
        <div className={classes.root} onClick={props.handleClick}>
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