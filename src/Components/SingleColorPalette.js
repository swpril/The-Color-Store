import React, { useState } from 'react';
import ColorBox from './ColorBox';
import "../Styles/Palette.css";
const SingleColorPalette = (props) => {
    const gatherShades = (palette, colorID) => {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter((color) => color.id === colorID))
        }
        return shades.slice(1);
    }
    const [_shades, setShades] = useState(gatherShades(props.palette, props.colorID));
    console.log(_shades)
    const colorBoxes = _shades.map((color) =>
        < ColorBox
            key={color.id}
            name={color.name}
            background={color.hexValue}
            showLink={false} />
    )
    return (
        <div className='palette'>
            <div className='palette-colors '>
                {colorBoxes}
            </div>
        </div>
    )
}

export default SingleColorPalette;