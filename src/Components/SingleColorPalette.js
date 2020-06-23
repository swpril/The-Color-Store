import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './NavBar'
import PaletteFooter from './PaletteFooter';
import { useHistory } from 'react-router-dom';
const SingleColorPalette = (props) => {
    const history = useHistory();
    const [format, setFormat] = useState('hexValue');
    const handleSelect = (e) => {
        setFormat(e);
    }

    const gatherShades = (palette, colorID) => {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter((color) => color.id === colorID))
        }
        return shades.slice(1);
    }
    const [_shades, setShades] = useState(gatherShades(props.palette, props.colorID));
    const colorBoxes = _shades.map((color) =>
        < ColorBox
            key={color.hexValue}
            name={color.name}
            background={color[format]}
            showLink={false} />
    )
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div>
            <div className='single-color-palette palette'>
                <Navbar handleSelect={handleSelect} showingAll={false} />
                <div className='palette-colors '>
                    {colorBoxes}
                    <div className='colorBox go-back' >
                        < button className='back-button' onClick={handleBack}>Go Back</button>
                    </div>
                </div>
            </div>
            <PaletteFooter name={props.palette.paletteName} emoji={props.palette.emoji} />
        </div>

    )
}

export default SingleColorPalette;