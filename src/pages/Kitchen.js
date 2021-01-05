import React from 'react';
import {
    Grid,
} from "@material-ui/core";



import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    div:{
        [theme.breakpoints.down('md')]: {
           marginLeft:9,
            marginRight:9

        },
        backgroundColor:"#e0e0e0",
        marginTop:"50px",
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around'
    },
    container:{
        marginTop:"40px",


    },
    mainContainer:{

    }
}));
const Kitchen = () => {
    const classes = useStyles();
    return (

        <>
            <div className={classes.div}>
                <Grid container direction="column" className={classes.mainContainer}>

                    <Grid item container className={classes.container}>
                        <Grid item xs={false} sm={2} md={3} lg={1}/>
                        <Grid item  xs={12} sm={8} md={6} lg={10}>

                        </Grid>
                        <Grid item xs={false}  sm={2} md={3} lg={1}/>
                    </Grid>

                </Grid>
            </div>

        </>

    );
}

export default Kitchen;
