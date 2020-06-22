import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'
import ColorBox from './ColorBox';

import '../Styles/Palette.css';

const Palette = (props) => {
    const [level, setLevel] = useState(500);
    const colorBox = props.palette.colors[level].map((color) => (
        <ColorBox background={color.hexValue} key={color.name} name={color.name} />
    ))
    const handleChange = (level) => {
        setLevel(level);
    }
    return (
        <div className='palette'>
            <Slider defaultValue={level} min={100} max={900} onAfterChange={handleChange} step={100} />
            <div className='palette-colors '>
                {colorBox}
            </div>

        </div>
    )
}

export default Palette;