import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Home.styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const logo = ('images/logo.png')
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            NN
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Client name"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/images/pga.jpg"
        title="Client name"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Our project aims to shortcut and merge two phases which are prototyping and industrialization of your product to fit your needs,
         it's a digital interconnection platform for the fashion industry.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <div class="logs"><img src={logo}/></div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

      </Collapse>
    </Card>

  );
}
export default Home