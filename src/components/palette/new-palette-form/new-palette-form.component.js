import React, { useState } from 'react';

import clsx from 'clsx';
import {
  Drawer,
  Button,
  Divider,
  IconButton,
  Typography
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';

import { arrayMove } from 'react-sortable-hoc';

import { DraggableColorList } from '../../draggable-color-list/draggable-color-list.component';
import { ColorPickerForm } from '../../color-picker-form/color-picker-form.component';
import { PaletteFormNav } from '../palette-form-nav/palette-form-nav.component';

import useStyles from './new-palette-form.styles';
import seedColors from '../../../seed-colors';

const NewPaletteForm = ({ savePalette, palettes, maxColors = 20 }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);
  const history = useHistory();

  const isPaletteFull = maxColors === colors.length;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColor = newColor => {
    setColors([...colors, newColor]);
  };

  const clearColors = () => {
    setColors([]);
  };

  const saveNewPalette = (newPaletteName, emoji) => {
    const name = newPaletteName;
    const newPalette = {
      colors: colors,
      paletteName: name,
      id: name.toLowerCase().replace(/ /g, '-'),
      emoji: emoji
    };
    savePalette(newPalette);
    history.push('/');
  };

  const addRandomColor = () => {
    let allColors = seedColors.map(p => p.colors).flat();
    let index;
    let randomColor;
    let isDuplicate = true;
    while (isDuplicate) {
      index = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[index];
      isDuplicate = colors.some(color => color.name === randomColor.name);
    }
    setColors([...colors, randomColor]);
  };

  const handleClick = colorName => {
    const newArray = colors.filter(color => color.name !== colorName);
    setColors(newArray);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(colors => arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        saveNewPalette={saveNewPalette}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContainer}>
          <Typography gutterBottom variant='h5' className={classes.drawerTitle}>
            Design New Palette{' '}
          </Typography>
          <div className={classes.drawerButtons}>
            <Button
              variant='contained'
              color='secondary'
              onClick={clearColors}
              className={classes.button}
            >
              Clear
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={isPaletteFull}
              className={classes.button}
              style={{ background: isPaletteFull ? 'grey' : null }}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            colors={colors}
            addColor={addColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
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
};

export { NewPaletteForm };
