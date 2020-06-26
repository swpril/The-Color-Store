import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import ColorBox from './ColorBox';
import Navbar from './NavBar'
import PaletteFooter from './PaletteFooter';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-4px',
        opacity: 1,
        backgroundColor: 'black',
        '& button': {
            opacity: 1,
            color: 'white',
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
    }
}))

const SingleColorPalette = (props) => {
    const history = useHistory();
    const [format, setFormat] = useState('hexValue');
    const handleSelect = (e) => {
        setFormat(e);
    }

    const gatherShades = (palette, colorID) => {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter((color) => color.id === colorID))
        }
        return shades.slice(1);
    }
    const [_shades] = useState(gatherShades(props.palette, props.colorID));
    const colorBoxes = _shades.map((color) =>
        < ColorBox
            key={color.hexValue}
            name={color.name}
            background={color[format]}
            showingFullPalette={false} />
    )
    const handleBack = () => {
        history.goBack();
    }
    const classes = useStyles();
    return (
        <div>
            <div className={classes.palette}>
                <Navbar handleSelect={handleSelect} showingAll={false} />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        < button onClick={handleBack}>Go Back</button>
                    </div>
                </div>
            </div>
            <PaletteFooter name={props.palette.paletteName} emoji={props.palette.emoji} />
        </div>

    )
}

export default SingleColorPalette;