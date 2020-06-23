import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../Styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        await setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    }
    return (

        <div className='colorBox' style={{ background }}>
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <CopyToClipboard text={background} onCopy={handleCopy}>
                    <button className='copy-button' >Copy </button>
                </CopyToClipboard>
            </div>
            <div style={{ background }} className={`copy-overlay ${isCopied && 'show'}`} />
            <div className={`copy-msg ${isCopied && 'show'}`}>
                <h1>COPIED</h1>
                <p>{background}</p>
            </div>
            <Link to='/'> <span className='more'>More</span></Link>

        </div>
    )
};

export default ColorBox; 