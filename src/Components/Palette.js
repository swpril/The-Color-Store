import React from 'react';
import ColorBox from './ColorBox';
import '../Styles/Palette.css';

const Palette = (props) => {
    const colorBox = props.colors.map((color) => (
        <ColorBox background={color.color} key={color.name} name={color.name} />
    ))
    return (
        <div className='palette'>
            <div className='palette-colors '>
                {colorBox}
            </div>

        </div>
    )
}

export default Palette;