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
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
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
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
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
    },
    boxContent: {
        position: 'absolute',
        padding: '10',
        width: '100%',
        left: 0,
        bottom: 0,
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: 1,
        transform: 'scale(50)',
        zIndex: 15,
        position: 'absolute',
    },
    copyMsg: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: 0,
        color: 'white',
        flexDirection: 'column',
    },
    copyMsgShowOverlay: {
        opacity: 1,
        zIndex: 25,
        transition: 'all 0.6s ease-in-out',
        transitionDelay: '0.1s',
        transform: 'scale(1)',
    },
    h1: {
        fontWeight: 400,
        textAlign: 'center',
        textShadow: '1px 2px black',
        background: ' rgba(255, 255, 255, 0.2)',
        width: '100%',
        marginBottom: 0,
        padding: '1rem',
        fontSize: '2rem',
    },
    p: {
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
        fontWeight: 100,
        fontSize: '2rem',
        textTransform: 'uppercase',
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
            <div >
                <div className={classes.boxContent}>
                    <span className={classes.colorName}>{props.name}</span>
                </div>
                <CopyToClipboard text={props.background} onCopy={handleCopy}>
                    <button className={classes.copyButton}>Copy </button>
                </CopyToClipboard>
            </div>
            <div style={{ background: props.background }} className={`${classes.copyOverlay} ${isCopied && classes.showOverlay}`} />
            <div className={`${classes.copyMsg} ${isCopied && classes.copyMsgShowOverlay}`}>
                <h1 className={classes.h1}>COPIED</h1>
                <p className={classes.p}>{props.background}</p>
            </div>
            {props.showingFullPalette && (<Link to={`/palette/${props.paletteId}/${props.id}`}>
                <span className={classes.seeMore}>More</span></Link>)}


        </div>
    )
};

export default ColorBox; 