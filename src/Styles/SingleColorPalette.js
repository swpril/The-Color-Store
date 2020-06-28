import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    palette: {
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 0
    },
    paletteColors: {
        height: '100%'
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
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '10%',
        },
        [theme.breakpoints.between('sm', 959)]: {
            width: '50%',
            height: '20%',
        },
        [theme.breakpoints.between(961, 1279)]: {
            width: '25%',
            height: '33.33%',
        }
    }
}));

export default useStyles;