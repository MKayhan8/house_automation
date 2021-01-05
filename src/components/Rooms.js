import React from 'react';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CoffeeMakerList from '../data/constants';
import homeData from "../data/homeData";
import CardRoom from "./CardRoom";

const useStyles = makeStyles((theme) => ({
    root:{

    }
}));


const Rooms = () =>{


    const classes = useStyles();

    const getCofferMakerCard = (roomMakerObj)=>{
        return(
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <CardRoom{...roomMakerObj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={2} className={classes.root}>
            {homeData.map(roomMakerObj => getCofferMakerCard(roomMakerObj))}
        </Grid>
    )
};

export default Rooms;
