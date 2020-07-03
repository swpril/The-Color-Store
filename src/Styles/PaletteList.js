import { makeStyles } from '@material-ui/core';
import bg from '../Components/images/bg.svg'
const useStyles = makeStyles((theme) => ({
    '@global': {
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        height: '100vh',
        display: 'flex',
        backgroundColor: 'blue',
        alignItems: 'flex-start ',
        justifyContent: 'center ',
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${bg})`,
        overflow: 'scroll',
    },
    container: {
        // display: 'flex',
        // border: '2px solid red',
        // height: '100vh',
        // width: '50%',
        // alignItems: 'flex-start',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // [theme.breakpoints.up(1400)]: {
        //     width: '50%'
        // }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        textAlign: 'end',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(1.5)
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%',
        [theme.breakpoints.between('sm', 959)]: {
            gridTemplateColumns: 'repeat(2,50%)',
            gridGap: '3 %',
        },
        [theme.breakpoints.down('599')]: {
            gridTemplateColumns: 'repeat(1,100%)',
            gridGap: '2%',
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(1.5)
        }
    }
}));

export default useStyles;