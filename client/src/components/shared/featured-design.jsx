import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './featured-design.styles.scss'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const FeaturedDesign = (designs) => {
    const { id, title, imageUrl, discription } = designs;

    const classes = useStyles();

    return (
      <Grid item>
<Card a className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
          id={id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Link to={`/singledesign/${id}`}>
        <Button size="small" color="primary">
          View
        </Button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
    );
} 

export default FeaturedDesign;