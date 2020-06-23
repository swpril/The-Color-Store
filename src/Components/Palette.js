import React, { useState } from 'react';
import ColorBox from './ColorBox';
import '../Styles/Palette.css';
import NavBar from './NavBar';

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hexValue');
    const handleChange = (level) => {
        setLevel(level);
    }
    const handleSelect = (e) => {
        setFormat(e);
    }
    const colorBox = props.palette.colors[level].map((color) => (
        <ColorBox
            background={color[format]}
            key={color.id}
            name={color.name}
            id={color.id}
            paletteId={props.palette.id}
        />
    ))
    return (
        <div className='palette'>
            <NavBar level={level} handleChange={handleChange} handleSelect={handleSelect} />
            <div className='palette-colors '>
                {colorBox}
            </div>
            <footer className='footer'>
                {props.palette.paletteName}
                <span className='emoji'>{props.palette.emoji}</span>
            </footer>
        </div>
    )
}

export default Palette;