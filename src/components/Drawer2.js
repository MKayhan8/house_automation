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
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from "@material-ui/icons/Home";
import IconBathroom from "../svg/IconBathroom";
import IconBedroom from "../svg/IconBedroom";
import IconGarage from "../svg/IconGarage";
import IconHome from "../svg/IconHome";
import IconKitchen from "../svg/IconKitchen";
import IconLivingroom from "../svg/IconLivingroom";
import {Container, Drawer as MUIDrawer} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kitchen from "../pages/Kitchen";
import Living from "../pages/Livingroom";

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
            icon: <IconKitchen style={{backgroundColor:"#DB2777"}}/>
        },
        {
            text:"Living room",
            icon: <IconLivingroom style={{color:"#111827"}}/>
        },
        {
            text:"Bathroom",
            icon: <IconBathroom style={{color:"#111827"}}/>
        },
        {
            text:"Bedroom",
            icon: <IconBedroom style={{color:"#111827"}}/>
        },
        {
            text:"Garage",
            icon: <IconGarage style={{color:"#111827"}}/>
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
                {itemsList.map((item, index) => {

                    const {text,icon} = item
                    let url = '/' + text.toLowerCase()
                    url = url.replace(/\s/g, '');
                    return(
                        <Link to={url} className={classes.link}>
                            <ListItem button key={text} onClick={()=>setTitle(text)}>
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
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
