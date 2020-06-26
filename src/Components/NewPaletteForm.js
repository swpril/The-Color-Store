import React from 'react';
import clsx from 'clsx';
import {
    Drawer, Button,
    CssBaseline, AppBar, Toolbar,
    Typography, Divider, IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    Add as AddIcon, ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';
import { ChromePicker } from 'react-color';
import useStyles from '../Styles/NewPaletteForm';

const NewPaletteFrom = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <AddIcon className={classes.addIcon} />
                    </IconButton>
                    <Link to='/'>
                        The Color Store
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant='h5'>Design New Palette </Typography>
                <div>
                    <Button variant='contained' color='secondary'>Clear</Button>
                    <Button variant='contained' color='Primary'>Random Color</Button>
                </div>

                <ChromePicker color='red' onChangeComplete={(color) => console.log(color)} />
                <Button variant='contained' color='secondary'>Add Color</Button>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
        </Typography>
            </main>
        </div>
    );
}

export default NewPaletteFrom;