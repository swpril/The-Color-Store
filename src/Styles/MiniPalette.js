import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        padding: ".5rem",
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#DAE1E4',
        height: '120px',
        width: '100%',
        borderRadius: theme.spacing(1),
        overflow: 'hidden'

    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        color: 'black',
        paddingTop: '.5rem',
        fontSize: '.75rem',
        position: 'relative '
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative'
    }
}));

export default useStyles;