import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start ',
        justifyContent: 'center ',
        overflowY: 'scroll',
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [theme.breakpoints.up(961)]: {
            width: '75%'
        }
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
        textDecoration: 'none'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%',
        [theme.breakpoints.between('sm', 959)]: {
            gridTemplateColumns: 'repeat(2,50%)',
        },
        [theme.breakpoints.down('599')]: {
            gridTemplateColumns: 'repeat(1,100%)',
        }
    }
}));

export default useStyles;