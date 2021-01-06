import React from 'react';
import {
    Grid,
} from "@material-ui/core";

import homeData from "../data/homeData";
import {makeStyles} from "@material-ui/core/styles"
import GraphContainer from "../components/GraphContainer";


const useStyles = makeStyles((theme) => ({
    div: {
        [theme.breakpoints.down('md')]: {
            marginLeft: 10,
            marginRight: 10

        },
        backgroundColor: "#e0e0e0",
        marginTop: "50px",
        width: '100vw',
        height: '100vh',

    },
    container: {
        marginTop: "40px",
    },

}));
const Garage = () => {
    const classes = useStyles();
    let obj = homeData.find(v => v.roomName === "Garage")
    const {powerWeekly, temperatureWeekly} = obj;
    let data_array = [powerWeekly, temperatureWeekly]
    let label_array = ["Daily Expended Electricity Graph", "Daily Average Temperature Graph"]
    let color_array = ["#2196f3", "#f50057"]
    let unit_array = ["Kwh", "°C"]


    return (

        <>
            <div className={classes.div}>
                <Grid container direction="column" className={classes.mainContainer}>

                    <Grid item container className={classes.container} spacing={2}>
                        <GraphContainer data_array={data_array} label_array={label_array} color_array={color_array}
                                        unit_array={unit_array}/>
                    </Grid>

                </Grid>
            </div>

        </>

    );
}

export default Garage;
