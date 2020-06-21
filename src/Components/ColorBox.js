import React, { useState } from 'react';
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
        <CopyToClipboard text={background} onCopy={handleCopy}>
            <div className='colorBox' style={{ background }}>
                <div style={{ background }} className={`copy-overlay ${isCopied && 'show'}`} />
                <div className={`copy-msg ${isCopied && 'show'}`}>
                    <h1>COPIED</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button' onClick={handleCopy}>Copy </button>
                </div>
                <span className='more'>More</span>
            </div>
        </CopyToClipboard>

    )
};

export default ColorBox; 