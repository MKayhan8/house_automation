import React, {useState, useEffect} from 'react';
import {
    Grid
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import GraphContainer from "../components/GraphContainer";
import Progress from "../components/Progress";
import axios from "axios";
import {getRoom} from "../services/API";

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
const Bathroom = () => {
    const [loading, setLoading] = useState(true)
    const classes = useStyles();
    const [data_array, setData_array] = useState([])
    const label_array = ["Daily Expended Electricity Graph", "Daily Average Temperature Graph"]
    const color_array = ["#2196f3", "#f50057"]
    const unit_array = ["Kwh", "°C"]

    const getApiData = () => {
        getRoom("Bathroom").then(res => {
                setData_array([res.data.powerWeekly, res.data.temperatureWeekly])
                setLoading(false)
            }
        ).catch((e) => {
            alert(e)
        })
    }

    useEffect(() => {
        getApiData()
    }, []);


    return (
        <>
            {loading ? <Progress/> : (<div className={classes.div}>
                <Grid container direction="column">

                    <Grid item container className={classes.container} spacing={2}>
                        <GraphContainer data_array={data_array} label_array={label_array} color_array={color_array}
                                        unit_array={unit_array}/>
                    </Grid>
                </Grid>
            </div>)}

        </>
    );
}

export default Bathroom;
