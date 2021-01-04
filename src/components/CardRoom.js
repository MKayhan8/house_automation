import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from "@material-ui/core/CardMedia";
/*
const useStyles = makeStyles({
    root: {
        backgroundColor:'#707070'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,

    },
});
*/

const CoffeCard = (props) =>{
    //const classes = useStyles();

    const {avatarUrl, title, subtitle, description, imageUrl} = props
    return(

        <Card >
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon style={{color:'#fff'}}/>
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia style={{height:"150px",  backgroundSize:"cover"}}

                       image={imageUrl}
                       title="Paella dish"
            />
            <CardContent>

                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy Now</Button>
                <Button size="small">Offer</Button>
            </CardActions>
        </Card>
    )
}
export default CoffeCard
