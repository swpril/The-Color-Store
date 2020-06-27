import React, { useEffect, useState } from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent,
    DialogContentText, DialogTitle
} from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PalleteModal = ({ palettes, saveNewPalette }) => {
    useEffect(() => {

        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return (palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()));
        });
    }, [palettes]);

    const [open, setOpen] = useState(false);
    const [newPaletteName, setNewPaletteName] = useState('');
    const handlePaletteName = (e) => {
        setNewPaletteName(e.target.value)
    };

    const handleClose = () => {
        setOpen(false);
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