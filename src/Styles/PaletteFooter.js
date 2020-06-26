import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: 'white',
        height: '4vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    emoji: {
        fontSize: '1rem',
        margin: '0 1rem'
    }
}));

export default useStyles;