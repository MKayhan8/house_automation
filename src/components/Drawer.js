import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconBathroom from "../svg/IconBathroom";
import IconBedroom from "../svg/IconBedroom";
import IconGarage from "../svg/IconGarage";
import IconHome from "../svg/IconHome";

import IconLivingroom from "../svg/IconLivingroom";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kitchen from "../pages/Kitchen";
import Living from "../pages/Livingroom";
import {ReactComponent as IconKitchen} from "../svg/kitchen.svg";
import Bathroom from "../pages/Bathroom";
import Bedroom from "../pages/Bedroom";
import Garage from "../pages/Garage";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor:"#fff"
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        color:"#111827"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:theme.primary,

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: 'none',
        //color: theme.palette.text.primary,
        fontWeight:"bold",
        color:"#111827"
    }

}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [title, setTitle] = useState("Dashboard");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const itemsList = [

        {
            text:"Kitchen",
            icon: <IconKitchen  />
        },
        {
            text:"Living room",
            icon: <IconLivingroom />
        },
        {
            text:"Bathroom",
            icon: <IconBathroom />
        },
        {
            text:"Bedroom",
            icon: <IconBedroom />
        },
        {
            text:"Garage",
            icon: <IconGarage />
        },
    ];

    const drawer = (

        <div>
            <div className={classes.toolbar} />

            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button onClick={()=>setTitle("Dashboard")}>
                        <ListItemIcon>
                            <IconHome />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h5" >
                            Dashboard
                        </Typography>}  />
                    </ListItem>
                </Link>


                <Divider />
                {itemsList?.map((item, index) => {

                    const {text,icon} = item
                    let url = '/' + text.toLowerCase()
                    url = url.replace(/\s/g, '');
                    return(
                        <Link to={url} className={classes.link}>
                            <ListItem button key={text} onClick={()=>setTitle(text)}>
                                { icon && <ListItemIcon>{icon}</ListItemIcon> }
                                <ListItemText primary={ <Typography variant="h6" >
                                    {text}
                                </Typography>} />
                            </ListItem>
                        </Link>
                    )}

                )}
            </List>
        </div>

    );


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Router>


            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap style={{color:"#111827"}}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/kitchen">
                        <Kitchen/>
                    </Route>
                    <Route exact path="/livingroom">
                        <Living/>
                    </Route>
                    <Route exact path="/bathroom">
                        <Bathroom/>
                    </Route>
                    <Route exact path="/bedroom">
                       <Bedroom/>
                    </Route>
                    <Route exact path="/garage">
                        <Garage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
