import React from 'react';
import {
    Container,
    Grid,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';




const useStyles = makeStyles({

    div:{
        backgroundColor:"#e0e0e0",
        marginTop:"50px"

    },
    container:{
        marginTop:"40px"
    }
});

function valuetext(value) {
    return `${value}°C`;
}

const Living = () => {
    const classes = useStyles();
    return (



            <div className={classes.div}>
                <Grid container direction="column">

                    <Grid item container className={classes.container}>

                        <Grid item xs={12} sm={8} md={8}>
                            <Typography id="discrete-slider" gutterBottom>
                                Temperature
                            </Typography>
                            <Slider
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                            <Typography id="discrete-slider" gutterBottom>
                                Disabled
                            </Typography>
                            <Slider
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                                disabled
                            />
                        </Grid>

                    </Grid>

                </Grid>
            </div>




    )
};

export default Living;
