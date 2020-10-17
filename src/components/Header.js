import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

// making custom styles
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

}));

// create new header function
function Header() {
    // reference the style first
    const classes = useStyles();
    return (
    // wrap your code to Element like div span by fragment
    <React.Fragment>
        <CssBaseline />
        {/* AppBar like a NavBar in our css */}
        <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
        >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>Radiance Academy
                </Typography>
            </Toolbar>

        </AppBar>
    </React.Fragment>
    );

}

export default Header;