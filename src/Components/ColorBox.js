import React from 'react';
import '../Styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
    return (
        <div className='colorBox' style={{ background }}>
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy </button>
            </div>
            <span className='more'>More</span>
        </div>
    )
};

export default ColorBox;