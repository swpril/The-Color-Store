import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';
import 'rc-slider/assets/index.css'
import '../Styles/Navbar.css';

const NavBar = ({ level, handleChange, handleSelect }) => {
    const [format, setFormat] = useState('hex');
    const handleFormat = (e) => {
        setFormat(e.target.value)
        handleSelect(e.target.value);
    }
    return (
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>The Color Store</a>
            </div>
            <div className='slider-container'>
                <span>Level : {level}</span>
                <div className='slider'>
                    <Slider defaultValue={level} min={100} max={900} onAfterChange={handleChange} step={100} />
                </div>
            </div>
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
        </header>
    )
}

export default NavBar;