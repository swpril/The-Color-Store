import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../Styles/ColorBox.css';

const ColorBox = ({ background, name, paletteId, id, showLink }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        await setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    }
    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.5;
    return (

        <div className='colorBox' style={{ background }}>
            <div className='copy-container'>
                <div className='box-content'>
                    <span className={isDark ? 'light-text' : null}>{name}</span>
                </div>
                <CopyToClipboard text={background} onCopy={handleCopy}>
                    <button className={`copy-button`} >Copy </button>
                </CopyToClipboard>
            </div>
            <div style={{ background }} className={`copy-overlay ${isCopied && 'show'}`} />
            <div className={`copy-msg ${isCopied && 'show'}`}>
                <h1>COPIED</h1>
                <p className={isLight ? 'dark-text' : null}>{background}</p>
            </div>
            {showLink && (<Link to={`/palette/${paletteId}/${id}`}>
                <span className={`more ${isLight ? 'dark-text' : null}`}>More</span></Link>)}


        </div>
    )
};

export default ColorBox; 