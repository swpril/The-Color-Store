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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PalleteModal;