import React from 'react';
import '../Styles/Palette.css'
const PaletteFooter = ({ name, emoji }) => {
    return (
        <footer className='footer'>
            {name}
            <span className='emoji'>{emoji}</span>
        </footer>
    );
}

export default PaletteFooter;