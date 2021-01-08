import React from 'react';
import {
    Grid, CircularProgress
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    progress: {
        margin: "auto",
    },
    progressContainer: {
        width: "100%",
        height: "100vh",
        alignItems: "center"
    }
}));
const Progress = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.progressContainer}><CircularProgress className={classes.progress}
                                                                                color={"secondary"} size={75}/> </Grid>
    )
}

export default Progress;
