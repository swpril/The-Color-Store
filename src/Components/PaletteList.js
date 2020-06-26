import React from 'react';
import { useHistory } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import useStyles from '../Styles/PaletteList';

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