import React from 'react';
import {
   Grid,
} from "@material-ui/core";

import Rooms from "../components/Rooms";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   div:{
       [theme.breakpoints.down('md')]: {
           marginLeft:10,
           marginRight:10

       },
       backgroundColor:"#e0e0e0",
       marginTop:"50px"

   },
    container:{
        marginTop:"40px",

    },
    mainContainer:{

    }
}));

const  Dashboard =() => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.div}>
                <Grid container direction="column" className={classes.mainContainer}>

                    <Grid item container className={classes.container}>
                        <Grid item xs={false} sm={2} md={3} lg={1}/>
                        <Grid item  xs={12} sm={8} md={6} lg={10}>
                            <Rooms/>
                        </Grid>
                        <Grid item xs={false}  sm={2} md={3} lg={1}/>
                    </Grid>

                </Grid>
            </div>

        </>
    );
}

export default Dashboard;
