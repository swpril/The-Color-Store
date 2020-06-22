import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import '../Styles/Navbar.css';

const NavBar = ({ level, handleChange }) => {
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
        </header>
    )
}

export default NavBar;