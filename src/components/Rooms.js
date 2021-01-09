import React, {useState, useEffect} from 'react';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
//import homeData from "../data/homeData";
import CardRoom from "./CardRoom";
import axios from "axios";
import Progress from "./Progress";

const useStyles = makeStyles((theme) => ({
    root: {}
}));


const Rooms = () => {

    const [loading, setLoading] = useState(true)
    const [homeData, setHomeData] = useState({})
    const classes = useStyles();

    const getApiData = async () => {
        await axios.get("http://localhost:9000/rooms").then(res => {
            setHomeData(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        getApiData()
    }, []);

    const getRoomCard = (roomMakerObj) => {
        return (
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <CardRoom{...roomMakerObj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={2} className={classes.root} justify={"center"}>
            {loading ? (<Grid item xs={12} sm={12} md={12} lg={12}>
                <Progress/>
            </Grid>) : (
                homeData.map(roomMakerObj => getRoomCard(roomMakerObj))
            )}
        </Grid>
    )
};

export default Rooms;
