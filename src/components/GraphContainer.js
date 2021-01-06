import React from 'react';
import {
    Grid, Card, CardContent
} from "@material-ui/core";

import LineGraph from "../components/LineGraph";
import {makeStyles} from "@material-ui/core/styles"


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
const GraphContainer = (props) => {

    return (

        <>
            <Grid item xs={1} sm={1} md={1} lg={2}/>
            <Grid item xs={10} sm={10} md={10} lg={8}>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Card>
                        <CardContent>
                            <LineGraph data={props.data_array[0]} label={props.label_array[0]}
                                       color={props.color_array[0]} unit={props.unit_array[0]}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop: "15px"}}>
                    <Card>
                        <CardContent>
                            <LineGraph data={props.data_array[1]} label={props.label_array[1]}
                                       color={props.color_array[1]} unit={props.unit_array[1]}/>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={2}/>

        </>

    );
}

export default GraphContainer;
