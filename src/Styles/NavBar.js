import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },

    logo: {
        marginRight: '15px',
        padding: ' 0 13px',
        fontSize: '22px',
        backgroundColor: ' #ECEFF1',
        fontFamily: 'Roboto Mono',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        }
    },

    slider: {
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        '& .rc-slider-track': {
            background: 'transparent'
        },
        '& .rc-slider-handle:active .rc-slider-handle:hover .rc-slider-handle:focus': {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '2em',
    }
}))

export default useStyles;