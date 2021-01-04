import React from 'react';
import CoffeCard from "../components/CardRoom";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CoffeeMakerList from '../data/constants';

const useStyles = makeStyles((theme) => ({
    root:{

    }
}));


const Rooms = () =>{


    const classes = useStyles();

    const getCofferMakerCard = (coffeMakerObj)=>{
        return(
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <CoffeCard{...coffeMakerObj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={2} className={classes.root}>
            {CoffeeMakerList.map(coffeMakerObj => getCofferMakerCard(coffeMakerObj))}
        </Grid>
    )
};

export default Rooms;
