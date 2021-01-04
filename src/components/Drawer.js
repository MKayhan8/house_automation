import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Dashboard from "../pages/Dashboard";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

import {
    Drawer as MUIDrawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography,Divider
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' , backgroundColor:"#f5f5f5"},
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        fontWeight:"bold"
    }
}))

function Drawer() {
    const classes = useStyles();
    const itemsList = [

        {
            text:"Kitchen",
            icon: <HomeIcon/>
        },
        {
            text:"Living room",
            icon: <HomeIcon/>
        },
        {
            text:"Bathroom",
            icon: <HomeIcon/>
        },
        {
            text:"Bedroom",
            icon: <HomeIcon/>
        },
        {
            text:"Garage",
            icon: <HomeIcon/>
        },
    ];
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <MUIDrawer
                    style={{ width: '250px' }}
                    variant="persistent"
                    anchor="left"
                    open={true}

                    classes={{ paper: classes.drawerPaper }}
                >
                    <List>
                        <Link to="/" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="h5" >
                                    Dashboard
                                </Typography>}  />
                            </ListItem>
                        </Link>


                        <Divider />
                        {itemsList.map((item, index) => {

                            const {text,icon} = item
                            let url = '/' + text.toLowerCase()

                            return(
                                <Link to={url} className={classes.link}>
                                <ListItem button key={text}>
                                    { icon && <ListItemIcon>{icon}</ListItemIcon> }
                                    {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                    <ListItemText primary={ <Typography variant="h6" >
                                        {text}
                                    </Typography>} />
                                </ListItem>
                                </Link>
                            )}

                        )}
                    </List>

                </MUIDrawer>
                <Switch>
                    <Route exact path="/">
                       <Dashboard/>
                    </Route>
                    <Route exact path="/bedroom">
                        <Container>
                            <Typography variant="h3" gutterBottom>
                                Bedroom
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Typography>
                        </Container>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Drawer;
