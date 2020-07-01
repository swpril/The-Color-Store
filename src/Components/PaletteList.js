import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
                    <h1 className={classes.title}>React Colors </h1>
                    <Link to='/palette/new' className={classes.link}>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {props.palettes.map((palette) => {
                        return (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <MiniPalette id={palette.id} deletePalette={props.deletePalette}{...palette} handleClick={() => { handleClick(palette.id) }} />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>

            </div>
        </div>
    )
};

export default PaletteList;