import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        padding: ".5rem",
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#DAE1E4',
        height: '120px',
        width: '100%',
        borderRadius: theme.spacing(1),
        overflow: 'hidden'

    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '.5rem',
        fontSize: '.75rem',
        position: 'relative '
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative'
    }
}))

const MiniPalette = (props) => {
    const classes = useStyles();
    const miniColorBoxes = props.colors.map((color) => (
        < div className={classes.miniColor} key={color.name} style={{ backgroundColor: color.color }}>

        </div >
    ))
    return (
        <div className={classes.root}>
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