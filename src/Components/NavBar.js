import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import 'rc-slider/assets/index.css'
import '../Styles/Navbar.css';

const NavBar = ({ level, handleChange, handleSelect, showingAll }) => {
    const [format, setFormat] = useState('hex');
    const [open, setOpen] = useState(false)
    const handleFormat = (e) => {
        setFormat(e.target.value)
        handleSelect(e.target.value);
        setOpen(true);
    }
    const handleOpen = () => {
        setOpen(false);
    }
    return (
        <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>The Color Store</Link>
            </div>
            {showingAll && (<div className='slider-container'>
                <span>Level : {level}</span>
                <div className='slider'>
                    <Slider defaultValue={level} min={100} max={900} onAfterChange={handleChange} step={100} />
                </div>
            </div>)}

            <div className='select-container'>
                <Select value={format} onChange={handleFormat}>
                    <MenuItem value='hex'> HEX- #FFFFFF
                    </MenuItem>
                    <MenuItem value='rgb'> RGB- rgb(r,g,b)
                    </MenuItem>
                    <MenuItem value='rgba'> RGBA- rgba(r,g,b,a)
                    </MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                autoHideDuration={2000}
                message={<span id='message-id'>Format Changed to {format.toUpperCase()}</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={handleOpen}
                action={[<IconButton onClick={handleOpen} color='inherit' key='close' aria-label='close'>
                    <CloseIcon />
                </IconButton>]}
            />
        </header>
    )
}

export default NavBar;