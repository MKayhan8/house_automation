import React from 'react';
import {
    Grid,
} from "@material-ui/core";

import Rooms from "../components/Rooms";

import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
    div:{
        backgroundColor:"#e0e0e0",
        marginTop:"50px"

    },
    container:{
        marginTop:"40px"
    }
}));
const Kitchen = () => {
    const classes = useStyles();
    return (

        <>
            <div className={classes.div}>
                <Grid container direction="column" >

                    <Grid item container className={classes.container}>
                        <Grid item xs={false} sm={2}/>
                        <Grid item xs={12} sm={8}>
                            <Rooms/>
                        </Grid>
                        <Grid item xs={false} sm={2}/>
                    </Grid>

                </Grid>
            </div>

        </>

    )
}

export default Kitchen;
