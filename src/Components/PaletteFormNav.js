import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Button, CssBaseline, AppBar, Toolbar, IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Add as AddIcon } from '@material-ui/icons';
import useStyles from '../Styles/PaletteFormNav';
import PaletteModal from './PaletteModal';

const PaletteFormNav = ({ open, palettes, handleDrawerOpen, saveNewPalette }) => {
    const [isShowing, setIsShowing] = useState(false);
    const handleClickOpen = () => {
        console.log(isShowing)
        setIsShowing(true);
    }
    const handleClose = () => {
        setIsShowing(false);
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <AddIcon className={classes.addIcon} />
                    </IconButton>
                    <Link to='/'>
                        Create A Palette
                    </Link>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to='/'>
                        <Button
                            className={classes.goButtons}
                            variant='contained'
                            color='secondary'
                        >Go Back</Button>
                    </Link>
                    <Button
                        className={classes.goButtons}
                        variant='contained' color='primary' onClick={handleClickOpen}>
                        Save
                    </Button>
                </div>
            </AppBar>
            {isShowing && (<PaletteModal
                palettes={palettes}
                saveNewPalette={saveNewPalette}
                handleClose={handleClose}
                isShowing={isShowing}

            />)}

        </div>
    );
}

export default PaletteFormNav;