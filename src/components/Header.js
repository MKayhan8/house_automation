import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit'

const useStyles = makeStyles((theme) => ({
    title:{
        flex:1,
    }
}));

const Header= (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>

                <Typography variant="h6" className={classes.title}>
                    {props.name}
                </Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    );
}
export default Header;
