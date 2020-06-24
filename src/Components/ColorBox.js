import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { makeStyles } from '@material-ui/core';
import '../Styles/ColorBox.css';

const useStyles = makeStyles(() => ({
    colorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-4px',
        '&:hover button': {
            opacity: 1
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.5 ? "black" : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : 'black'
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
        background: "rgba(255, 255, 255, 0.3)",
        position: 'absolute',
        border: 'none',
        right: 0,
        bottom: 0,
        fontSize: '12px',
        width: ' 60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
    },
    copyButton: {
        opacity: 0,
        color: props => chroma(props.background).luminance() >= 0.5 ? "black" : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        fontSize: '1rem',
        backgroundColor: ' rgba(255, 255, 255, 0.3)',
        lineHeight: '20px',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
    }
}))

const ColorBox = (props) => {
    const classes = useStyles(props);
    console.log(props.showingFullPalette)
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        await setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    }
    return (

        <div className={classes.colorBox} style={{ background: props.background }}>
            <div className='copy-container'>
                <div className='box-content'>
                    <span className={classes.colorName}>{props.name}</span>
                </div>
                <CopyToClipboard text={props.background} onCopy={handleCopy}>
                    <button className={classes.copyButton}>Copy </button>
                </CopyToClipboard>
            </div>
            <div style={{ background: props.background }} className={`copy-overlay ${isCopied && 'show'}`} />
            <div className={`copy-msg ${isCopied && 'show'}`}>
                <h1>COPIED</h1>
                <p className={classes.copyText}>{props.background}</p>
            </div>
            {props.showingFullPalette && (<Link to={`/palette/${props.paletteId}/${props.id}`}>
                <span className={classes.seeMore}>More</span></Link>)}


        </div>
    )
};

export default ColorBox; 