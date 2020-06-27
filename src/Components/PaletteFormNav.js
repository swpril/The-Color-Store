import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    Button, CssBaseline, AppBar, Toolbar, IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    Add as AddIcon
} from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from '../Styles/PaletteFormNav';

const PaletteFormNav = ({ open, palettes, handleDrawerOpen, saveNewPalette }) => {
    const classes = useStyles();
    const [newPaletteName, setNewPaletteName] = useState('');
    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return (palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()));
        });
    }, [palettes])
    const handlePaletteName = (e) => {
        setNewPaletteName(e.target.value)
    };
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
                    <ValidatorForm onSubmit={() => { saveNewPalette(newPaletteName) }}>
                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name='newPaletteName'
                            onChange={handlePaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['This fie ld cannot be empty', 'Palette name must be unique']}
                        />
                        <Button variant='contained' type='submit'>
                            Save Palette
                        </Button>
                    </ValidatorForm>
                    <Link to='/'>
                        <Button
                            variant='contained'
                            color='secondary'
                        >Go Back</Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    );
}

export default PaletteFormNav;