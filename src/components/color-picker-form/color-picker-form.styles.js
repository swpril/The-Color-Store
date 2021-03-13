import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  picker: {
    width: '100% !important',
    marginTop: '2vh'
  },
  addColorButton: {
    width: '100%',
    marginTop: '2vh',
    padding: '1rem',
    fontSize: '1rem',
    fontFamily: 'Roboto Mono'
  },
  inputText: {
    width: '100%',
    marginTop: '1vh'
  }
}));

export default useStyles;
