import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { ChromePicker } from 'react-color';

import useStyles from './color-picker-form.styles';

const ColorPickerForm = ({ isPaletteFull, colors, addColor }) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule('isColorUnique', value => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  const updateColor = newColor => setCurrentColor(newColor.hex);

  const handleChange = e => setNewColorName(e.target.value);

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    addColor(newColor);
    setNewColorName('');
  };

  return (
    <div className={classes.root}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          value={newColorName}
          name='newColorName'
          className={classes.inputText}
          placeholder='Color Name'
          onChange={handleChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'This field is required',
            'Color name must be unique',
            'Color already exists '
          ]}
        />
        <Button
          variant='contained'
          style={{ background: isPaletteFull ? 'grey' : currentColor }}
          type='submit'
          className={classes.addColorButton}
          disabled={isPaletteFull}
        >
          {isPaletteFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export { ColorPickerForm };
