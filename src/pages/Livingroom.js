import React, {useEffect, useState} from 'react';
import {
    Grid,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import GraphContainer from "../components/GraphContainer";
import Progress from "../components/Progress";
import axios from "axios";

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
const Livingroom = () => {
    const [loading, setLoading] = useState(true)
    const classes = useStyles();
    const [data_array, setData_array] = useState([])
    const label_array = ["Daily Expended Electricity Graph", "Daily Average Temperature Graph"]
    const color_array = ["#2196f3", "#f50057"]
    const unit_array = ["Kwh", "°C"]

    const getApiData = async () => {
        await axios.get("http://localhost:3000/rooms").then(res => {
            const dataObj = res.data.find(v => v.roomName === "Living room")
            setData_array([dataObj.powerWeekly, dataObj.temperatureWeekly])
            setData_array([dataObj.powerWeekly, dataObj.temperatureWeekly])
            setLoading(false)
        }).catch(err => {
            console.log(err)
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

export default Livingroom;
