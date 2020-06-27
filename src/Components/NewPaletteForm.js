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
import { useHistory } from 'react-router-dom';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from '../Styles/NewPaletteForm';
import { arrayMove } from 'react-sortable-hoc';

const NewPaletteFrom = ({ savePalette, palettes }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrenColor] = useState('teal');
    const [colors, setColors] = useState([]);
    const [newPaletteName, setNewPaletteName] = useState('');
    const [newColorName, setNewColorName] = useState('');
    const history = useHistory();
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
            name: newColorName
        }
        setColors([...colors, newColor])
        setNewColorName('');
    };

    const handleChange = (e) => {
        setNewColorName(e.target.value);
    };

    const handlePaletteName = (e) => {
        setNewPaletteName(e.target.value)
    }
    const saveNewPalette = () => {
        const name = newPaletteName;
        const newPalette = {
            colors: colors,
            paletteName: name,
            id: name.toLowerCase().replace(/ /g, '-'),
            emoji: '😆'
        }
        savePalette(newPalette);
        history.push('/');
    }

    const handleClick = (colorName) => {
        const newArray = colors.filter((color) => color.name !== colorName);
        setColors(newArray);
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(colors => arrayMove(colors, oldIndex, newIndex));
    }
    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return (colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()));
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return (colors.every(({ color }) => color !== currentColor));
        });
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return (palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()));
        });
    }, [colors, currentColor, palettes])

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
                    <ValidatorForm onSubmit={saveNewPalette}>
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
                        value={newColorName}
                        name='newColorName'
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
                <DraggableColorList
                    colors={colors}
                    handleClick={handleClick}
                    axis='xy'
                    onSortEnd={onSortEnd}
                />
            </main>
        </div>
    );
}

export default NewPaletteFrom;