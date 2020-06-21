import React from 'react';
import '../Styles/ColorBox.css';

const ColorBox = (props) => {
    return (
        <div className='colorBox' style={{ backgroundColor: props.background }}>
            <span>{props.name}</span>
        </div>
    )
};

export default ColorBox;