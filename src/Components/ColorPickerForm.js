import React, { useState, useEffect } from 'react';
import {
    Button, Typography,
} from '@material-ui/core';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ColorPickerForm = ({ isPaletteFull, colors, addColor }) => {
    const [currentColor, setCurrenColor] = useState('teal');
    const [newColorName, setNewColorName] = useState('');

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return (colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()));
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return (colors.every(({ color }) => color !== currentColor));
        });
    }, [colors, currentColor])

    const updateColor = (newColor) => {
        setCurrenColor(newColor.hex);
    };

    const handleChange = (e) => {
        setNewColorName(e.target.value);
    };

    const handleSubmit = () => {
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        addColor(newColor);
        setNewColorName('');
    }


    return (
        <div>
            <Typography variant='h5'>Design New Palette </Typography>

            <ChromePicker color={currentColor} onChangeComplete={updateColor} />
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    value={newColorName}
                    name='newColorName'
                    onChange={handleChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['This field is required', 'Color name must be unique', 'Color already exists ']}
                />
                <Button
                    variant='contained'
                    style={{ background: isPaletteFull ? 'grey' : currentColor }}
                    type='submit'
                    disabled={isPaletteFull}
                >{isPaletteFull ? 'Palette Full' : 'Add Color'}</Button>
            </ValidatorForm>
        </div>
    );
}

export default ColorPickerForm;