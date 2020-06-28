import { makeStyles } from '@material-ui/core';
import chroma from 'chroma-js';

const useStyles = makeStyles((theme) => ({
    colorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-4px',
        '&:hover button': {
            opacity: 1
        },

        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: props => props.showingFullPalette ? ' 5%' : '10%',
        },
        [theme.breakpoints.between('sm', 959)]: {
            width: '50%',
            height: props => props.showingFullPalette ? ' 10%' : '20%',
        },
        [theme.breakpoints.between(961, 1279)]: {
            width: '25%',
            height: props => props.showingFullPalette ? ' 20%' : '33.33%',
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
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    },
    p: {
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' : 'white',
        fontWeight: 100,
        fontSize: '2rem',
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    }
}));

export default useStyles;