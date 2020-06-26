import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    Drawer, Button,
    CssBaseline, AppBar, Toolbar,
    Typography, Divider, IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    Add as AddIcon, ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from '../Styles/NewPaletteForm';

const NewPaletteFrom = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrenColor] = useState('teal');
    const [colors, setColors] = useState([]);
    const [newName, setNewName] = useState('');
    const updateColor = (newColor) => {
        setCurrenColor(newColor.hex);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const addColor = () => {
        const newColor = {
            color: currentColor,
            name: newName
        }
        setColors([...colors, newColor])
        setNewName('');
    };

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return (colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()));
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return (colors.every(({ color }) => color !== currentColor));
        })
    }, [colors, currentColor])

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
                        The Color Store
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant='h5'>Design New Palette </Typography>
                <div>
                    <Button variant='contained' color='secondary'>Clear</Button>
                    <Button variant='contained' color='primary'>Random Color</Button>
                </div>

                <ChromePicker color={currentColor} onChangeComplete={updateColor} />
                <ValidatorForm onSubmit={addColor}>
                    <TextValidator
                        value={newName}
                        onChange={handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['This field is required', 'Color name must be unique', 'Color already exists ']}
                    />
                    <Button
                        variant='contained'
                        style={{ background: currentColor }}
                        type='submit'
                    >Add Color</Button>
                </ValidatorForm>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {colors.map((color, index) => (
                    <DraggableColorBox key={index} color={color.color} name={color.name} />
                ))}
            </main>
        </div>
    );
}

export default NewPaletteFrom;