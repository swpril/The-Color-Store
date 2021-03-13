import { makeStyles } from '@material-ui/core';

import chroma from 'chroma-js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-4px',
    backgroundColor: props => props.color,
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.2)'
    },
    [theme.breakpoints.down(959)]: {
      height: '20%',
      width: '25%'
    },
    [theme.breakpoints.down(599)]: {
      height: '10%',
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    position: 'absolute',
    padding: '10',
    width: '100%',

    left: 0,
    color: props =>
      chroma(props.color).luminance() <= 0.8
        ? 'rgba(255,255,255,0.7)'
        : 'rgba(0,0,0,0.7)',
    bottom: 0,
    fontSize: '12px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteIcon: {
    color: 'black',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer'
  }
}));

export default useStyles;
