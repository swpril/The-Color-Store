import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        padding: ".5rem",
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid black',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {

    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '.5rem',
        fontSize: '1rem',
        position: 'relative '
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1rem'
    }
}))

const MiniPalette = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
                <h5 className={classes.title}>
                    {props.paletteName}
                    <span className={classes.emoji}>{props.emoji}</span>
                </h5>
            </div>
        </div>
    )
};

export default MiniPalette;