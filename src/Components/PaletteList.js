import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import MiniPalette from './MiniPalette';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start ',
        justifyContent: 'center '
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%'
    }
}))
const PaletteList = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const handleClick = (id) => {
        history.push(`/palette/${id}`)
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors </h1>
                </nav>
                <div className={classes.palettes}>
                    {props.palettes.map((palette) => {
                        return (
                            <MiniPalette key={palette.id} {...palette} handleClick={() => { handleClick(palette.id) }} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
};

export default PaletteList;