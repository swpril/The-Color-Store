import { makeStyles } from '@material-ui/core';

const drawerWidth = 350;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        backgroundColor: '#ECEFF1',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        '& a': {
            textDecoration: 'none',
            color: 'black',
            fontFamily: 'Roboto Mono',
            fontSize: theme.spacing(2),
            fontWeight: 'bold'
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: theme.spacing(8)
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    addIcon: {
        color: 'black'
    },
}));

export default useStyles;