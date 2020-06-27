import React, { useState, useEffect } from 'react';
import PaletteFormNav from './PaletteFormNav';
import clsx from 'clsx';
import {
    Drawer, Button,
    Typography, Divider, IconButton
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
    ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';
import { ChromePicker } from 'react-color';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStyles from '../Styles/NewPaletteForm';
import { arrayMove } from 'react-sortable-hoc';

const NewPaletteFrom = ({ savePalette, palettes, maxColors = 20 }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [currentColor, setCurrenColor] = useState('teal');
    const [colors, setColors] = useState(palettes[0].colors);
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

    const clearColors = () => {
        setColors([]);
    };

    const saveNewPalette = (newPaletteName) => {
        const name = newPaletteName;
        const newPalette = {
            colors: colors,
            paletteName: name,
            id: name.toLowerCase().replace(/ /g, '-'),
            emoji: '😆'
        }
        savePalette(newPalette);
        history.push('/');
    };

    const addRandomColor = () => {
        const allColors = palettes.map((p) => p.colors).flat();
        const index = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[index];
        setColors([...colors, randomColor])

    };

    const handleClick = (colorName) => {
        const newArray = colors.filter((color) => color.name !== colorName);
        setColors(newArray);
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(colors => arrayMove(colors, oldIndex, newIndex));
    };
    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return (colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()));
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return (colors.every(({ color }) => color !== currentColor));
        });
    }, [colors, currentColor])

    return (
        <div className={classes.root}>
            <PaletteFormNav
                classes={classes}
                open={open}
                palettes={palettes}
                handleDrawerOpen={handleDrawerOpen}
                saveNewPalette={saveNewPalette}
            />
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
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={clearColors}
                    >Clear</Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={addRandomColor}
                        disabled={colors.length === maxColors}
                        style={{ background: colors.length === maxColors ? 'grey' : null }}
                    >Random Color</Button>
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
                        style={{ background: colors.length === maxColors ? 'grey' : currentColor }}
                        type='submit'
                        disabled={colors.length === maxColors}
                    >{colors.length === maxColors ? 'Palette Full' : 'Add Color'}</Button>
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