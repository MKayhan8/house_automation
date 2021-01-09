import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

import {
    Grid, Slider, Switch
} from "@material-ui/core";
import {IconTemperature, IconLampOpen, IconLampClose, IconGarage} from "../svg/Icons";
import {ReactComponent as IconCurtains} from '../svg/windows.svg';
import {ReactComponent as IconWashingMachine} from '../svg/washing-machine.svg';
import {ReactComponent as IconStove} from '../svg/oven.svg';
import {ReactComponent as IconDishwasher} from '../svg/dishwasher.svg';
import {ReactComponent as IconTv} from '../svg/tv.svg';


const useStyles = makeStyles((theme) => ({
    div: {
        [theme.breakpoints.down('md')]: {
            marginLeft: 9,
            marginRight: 9

        },
        backgroundColor: "#e0e0e0",
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around'
    },
    container: {},
    mainContainer: {},
    margin: {
        height: theme.spacing(3),
    },
}));


const CardRoom = (props) => {
    function valuetext(value) {
        setCelcius(value)
        return `${value}°C`;
    }

    const updateRoomItems = async (roomName, roomItem) => {
        let value;
        let dataObjToUpdate = {}
        switch (roomItem) {
            case "temperature":
                updateTemperature(roomName,celcius)
                break;
            case "lights":
                value = stateLights ? "close" : "open"
                dataObjToUpdate = {lights: value}
                break;
            case "stove":
                value = stateStove ? "close" : "open"
                dataObjToUpdate = {stove: value}
                break;
            case "dishwasher":
                value = stateDishWasher ? "close" : "open"
                dataObjToUpdate = {dishwasher: value}
                break;
            case "curtains":
                value = stateCurtains ? "close" : "open"
                dataObjToUpdate = {curtains: value}
                break;
            case "washingMachine":
                value = stateWashingMachine ? "close" : "open"
                dataObjToUpdate = {washingMachine: value}
                break;
            case "door":
                value = stateGarageDoor ? "close" : "open"
                dataObjToUpdate = {door: value}
                break;
            case "tv":
                value = stateTv ? "close" : "open"
                dataObjToUpdate = {tv: value}
                break;
            default:
            // code block
        }
        await axios.patch("http://localhost:9000/rooms?roomName=" + roomName, dataObjToUpdate).then((res) => {
            switch (roomItem) {
                case "lights":
                    setStatelights(!stateLights)
                    break;
                case "stove":
                    setStateStove(!stateStove)
                    break;
                case "dishwasher":
                    setStateDishWasher(!stateDishWasher)
                    break;
                case "curtains":
                    setStateCurtains(!stateCurtains)
                    break;
                case "washingMachine":
                    setStateWashingMachine(!stateWashingMachine)
                    break;
                case "door":
                    setStateGarageDoor(!stateGarageDoor)
                    break;
                case "tv":
                    setStateTv(!stateTv)
                    break;
                default:
                // code block
            }
        }).catch((e) => {
            alert(e)
        })
    }

    const updateTemperature = async (roomName,value)=>{
       await axios.patch("http://localhost:9000/rooms?roomName="+roomName,{temperature:value}).then((res)=>{
           setCelcius(value)
        }).catch((e)=>{
            alert(e)
        })
    }

    const classes = useStyles();
    const {roomName, lights, temperature, curtains, door, dishwasher, stove, washingMachine, tv} = props
    const [celcius, setCelcius] = useState(temperature)
    const [stateLights, setStatelights] = useState(lights === "open")
    const [stateCurtains, setStateCurtains] = useState(curtains === "open")
    const [stateGarageDoor, setStateGarageDoor] = useState(door === "open")
    const [stateDishWasher, setStateDishWasher] = useState(dishwasher === "open")
    const [stateStove, setStateStove] = useState(stove === "open")
    const [stateWashingMachine, setStateWashingMachine] = useState(washingMachine === "open")
    const [stateTv, setStateTv] = useState(tv === "open")
    return (

        <Card style={{height: "100%"}}>
            <CardHeader
                titleTypographyProps={{variant: 'h5'}}
                title={roomName}

            />

            <CardContent>
                <Grid container direction="column" className={classes.mainContainer}>

                    <Grid item container className={classes.container}>

                        <Grid container direction="row">
                            <Grid item container xs={12} sm={12} md={12} lg={12}>

                                <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                    <Grid item xs={2} sm={2} md={2} lg={2}>

                                        {celcius <= 20 ? <IconTemperature fill='#3B82F6' stroke='#000'/> :
                                            <IconTemperature fill='red' stroke='#000'/>}

                                    </Grid>
                                    <Grid item xs={2} sm={2} md={2} lg={2}>
                                        <Typography variant="body2" component="p">
                                            {celcius + ' °C'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} lg={8}>
                                        <Slider

                                            defaultValue={parseFloat(temperature)}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            color={"secondary"}
                                            min={0}
                                            max={50}
                                            style={{textColor: "#fff"}}
                                            onChangeCommitted={(event,value) =>updateRoomItems(roomName,"temperature") }



                                        />
                                    </Grid>

                                </Grid>


                            </Grid>


                        </Grid>

                        <Grid container direction="row" style={{paddingTop: "10px"}}>
                            <Grid item container xs={12} sm={12} md={12} lg={12}>

                                <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                    <Grid item xs={2} sm={2} md={2} lg={2}>

                                        {stateLights ? <IconLampOpen/> : <IconLampClose/>}

                                    </Grid>
                                    <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                        <Typography component="div">
                                            <Grid component="label" container alignItems="center" spacing={1}>
                                                <Grid item>Lights</Grid>
                                                <Grid item>
                                                    <Switch
                                                        checked={stateLights}
                                                        onChange={() => updateRoomItems(roomName, "lights")}
                                                        color="secondary"
                                                        name="checkedB"
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />
                                                </Grid>

                                            </Grid>
                                        </Typography>
                                    </Grid>


                                </Grid>


                            </Grid>


                        </Grid>
                        {dishwasher === "open" || dishwasher === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateDishWasher ? <IconDishwasher fill='#3B82F6' stroke='#000'/> :
                                                <IconDishwasher/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item> <Typography component="div">
                                                        Dishwasher
                                                    </Typography></Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateDishWasher}
                                                            onChange={() => updateRoomItems(roomName, "dishwasher")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}
                        {stove === "open" || stove === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateStove ? <IconStove fill='#3B82F6' stroke='#000'/> : <IconStove/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item> <Typography component="div">
                                                        Stove
                                                    </Typography></Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateStove}
                                                            onChange={() => updateRoomItems(roomName, "stove")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}
                        {washingMachine === "open" || washingMachine === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateWashingMachine ? <IconWashingMachine fill='#3B82F6' stroke='#000'/> :
                                                <IconWashingMachine/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item> <Typography component="div">
                                                        Washing Machine
                                                    </Typography></Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateWashingMachine}
                                                            onChange={() => updateRoomItems(roomName, "washingMachine")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}
                        {tv === "open" || tv === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateTv ? <IconTv fill='#3B82F6' stroke='#000'/> : <IconTv/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item> <Typography component="div">
                                                        Tv
                                                    </Typography></Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateTv}
                                                            onChange={() => updateRoomItems(roomName, "tv")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}
                        {curtains === "open" || curtains === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateCurtains ? <IconCurtains fill='#3B82F6' stroke='#000'/> :
                                                <IconCurtains/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item> <Typography component="div">
                                                        Curtains
                                                    </Typography></Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateCurtains}
                                                            onChange={() => updateRoomItems(roomName, "curtains")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}
                        {door === "open" || door === "close" ? (
                            <Grid container direction="row" style={{paddingTop: "12px"}}>
                                <Grid item container xs={12} sm={12} md={12} lg={12}>

                                    <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                        <Grid item xs={2} sm={2} md={2} lg={2}>

                                            {stateGarageDoor ? <IconGarage fill='#3B82F6' stroke='#000'/> :
                                                <IconGarage/>}

                                        </Grid>
                                        <Grid item container direction="row" xs={10} sm={10} md={10} lg={10}>
                                            <Typography component="div">
                                                <Grid component="label" container alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <Typography component="div">
                                                            Door
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={stateGarageDoor}
                                                            onChange={() => updateRoomItems(roomName, "door")}
                                                            color="secondary"
                                                            name="checkedB"
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Typography>
                                        </Grid>


                                    </Grid>


                                </Grid>


                            </Grid>) : null}


                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    )
}
export default CardRoom
