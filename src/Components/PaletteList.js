import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
    Dialog, DialogTitle,
    List, ListItem, ListItemAvatar,
    ListItemText, Avatar
} from '@material-ui/core';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Check as CheckIcon, Close as CloseIcon } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors'
import MiniPalette from './MiniPalette';
import useStyles from '../Styles/PaletteList';

const PaletteList = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const [id, setId] = useState(null);
    const handleClick = (id) => {
        history.push(`/palette/${id}`)
    }
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => {
        setOpen(true);
        setId(id);
    }
    const handleDialogClose = () => {
        setOpen(false);
        setId(null);
    }

    const handleDelete = () => {
        props.deletePalette(id);
        handleDialogClose();
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.title}>React Colors </h1>
                    <Link to='/palette/new' className={classes.link}>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {props.palettes.map((palette) => {
                        return (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                                <MiniPalette
                                    id={palette.id}
                                    openDialog={handleOpen}
                                    {...palette}
                                    handleClick={() => { handleClick(palette.id) }}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </div>
            <Dialog open={open} aria-labelledby='delete-palette-dialog' onClose={handleDialogClose}>
                <DialogTitle id='delete-palette-dialog'>Delete This Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete} >
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>
                    <ListItem button onClick={handleDialogClose}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Close' />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
};

export default PaletteList;