import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useStyles from '../Styles/ColorBox';

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