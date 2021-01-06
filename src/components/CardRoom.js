import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
    Grid, Slider, Switch
} from "@material-ui/core";
import {IconTemperature, IconLampOpen, IconLampClose, IconGarage} from "../svg/Icons";
import {ReactComponent as IconCurtains} from '../svg/windows.svg';
import {ReactComponent as IconWashingMachine} from '../svg/washing-machine.svg';
import {ReactComponent as IconStove} from '../svg/oven.svg';
import {ReactComponent as IconDishwasher} from '../svg/dishwasher.svg';
import {ReactComponent as IconTv} from '../svg/tv.svg';
import IconBathroom from "../svg/IconBathroom";

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

    const classes = useStyles();
    const {roomName, power, lights, humidity, temperature, curtains, door, dishwasher, stove, washingMachine, tv} = props
    const [celcius, setCelcius] = useState(temperature)
    const [stateLights, setStatelights] = useState(lights === "open")
    const [stateCurtains, setStateCurtains] = useState(curtains === "open")
    const [stateGarageDoor, setStateGarageDoor] = useState(door === "open")
    const [stateDishWasher, setStateDishWasher] = useState(dishwasher === "open")
    const [stateStove, setStateStove] = useState(stove === "open")
    const [stateWashingMachine, setStateWashingMachine] = useState(washingMachine === "open")
    const [stateTv, setStateTv] = useState(tv === "open")
    return (

        <Card style={{height:"100%"}}>
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

                                        <IconTemperature/>

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


                                        />
                                    </Grid>

                                </Grid>


                            </Grid>


                        </Grid>

                        <Grid container direction="row">
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
                                                        onChange={() => setStatelights(!stateLights)}
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
                        {dishwasher === "open" || dishwasher === "close" ? (<Grid container direction="row">
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
                                                        onChange={() => setStateDishWasher(!stateDishWasher)}
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
                        {stove === "open" || stove === "close" ? (<Grid container direction="row">
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
                                                        onChange={() => setStateStove(!stateStove)}
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
                        {washingMachine === "open" || washingMachine === "close" ? (<Grid container direction="row">
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
                                                        onChange={() => setStateWashingMachine(!stateWashingMachine)}
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
                        {tv === "open" || tv === "close" ? (<Grid container direction="row">
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
                                                        onChange={() => setStateTv(!stateTv)}
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
                        {curtains === "open" || curtains === "close" ? (<Grid container direction="row">
                            <Grid item container xs={12} sm={12} md={12} lg={12}>

                                <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                    <Grid item xs={2} sm={2} md={2} lg={2}>

                                        {stateCurtains ? <IconCurtains fill='#3B82F6' stroke='#000'/> : <IconCurtains/>}

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
                                                        onChange={() => setStateCurtains(!stateCurtains)}
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
                        {door === "open" || door === "close" ? (<Grid container direction="row">
                            <Grid item container xs={12} sm={12} md={12} lg={12}>

                                <Grid container direction="row" xs={12} sm={12} md={12} lg={12}>

                                    <Grid item xs={2} sm={2} md={2} lg={2}>

                                        <IconGarage/>

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
                                                        onChange={() => setStateGarageDoor(!stateGarageDoor)}
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
