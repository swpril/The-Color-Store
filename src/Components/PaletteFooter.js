import React from 'react';
import useStyles from '../Styles/PaletteFooter';

const PaletteFooter = ({ name, emoji }) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            {name}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    );
}

export default PaletteFooter;