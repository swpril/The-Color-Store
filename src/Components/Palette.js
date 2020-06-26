import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import useStyles from '../Styles/Palette';

const Palette = (props) => {
    const classes = useStyles();
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
            showingFullPalette={true}
        />
    ))
    return (
        <div className={classes.palette}>
            <NavBar level={level} handleChange={handleChange} handleSelect={handleSelect} showingAll={true} />
            <div className={classes.paletteColors}>
                {colorBox}
            </div>
            <PaletteFooter name={props.palette.paletteName} emoji={props.palette.emoji} />
        </div>
    )
}

export default Palette;