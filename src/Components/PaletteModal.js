import React, { useEffect, useState } from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent,
    DialogContentText, DialogTitle
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const PalleteModal = ({ isShowing, palettes, saveNewPalette, handleClose }) => {
    useEffect(() => {

        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return (palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()));
        });
    }, [palettes]);

    const [open] = useState(isShowing);
    const [newPaletteName, setNewPaletteName] = useState('');
    const handlePaletteName = (e) => {
        setNewPaletteName(e.target.value)
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Save Palette</DialogTitle>
                <ValidatorForm onSubmit={() => { saveNewPalette(newPaletteName) }}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a unique name for your beautiful palette!
                        </DialogContentText>
                        <Picker />
                        <TextValidator
                            fullWidth
                            label='Palette Name'
                            value={newPaletteName}
                            margin='normal'
                            name='newPaletteName'
                            onChange={handlePaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['This fie ld cannot be empty', 'Palette name must be unique']}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='primary'>
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}

export default PalleteModal;