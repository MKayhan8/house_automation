import React from 'react';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import homeData from "../data/homeData";
import CardRoom from "./CardRoom";

const useStyles = makeStyles((theme) => ({
    root: {}
}));


const Rooms = () => {


    const classes = useStyles();

    const getRoomCard = (roomMakerObj) => {
        return (
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <CardRoom{...roomMakerObj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={2} className={classes.root} justify={"center"}>
            {homeData.map(roomMakerObj => getRoomCard(roomMakerObj))}
        </Grid>
    )
};

export default Rooms;
