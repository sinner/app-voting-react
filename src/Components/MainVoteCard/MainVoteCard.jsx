import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    borderRadius: 0,
    color: 'white',
  },
  cardContent: {
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 90,
    height: '49vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  information: {
    marginBottom: 12,
    marginTop: 20,
  },
  moreInfo: {
    marginTop: 10,
  },
  veredict: {
    marginTop: 25,
  },
  cardActions: {
    position: 'relative',
    bottom: 0,
    right: 0,
  },
});

export default function MainVoteCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={`${classes.card} main-vote-card`}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} gutterBottom>
          What's your opinion on
        </Typography>
        <Typography variant="h2" component="h1">
          Pope Francis?
        </Typography>
        <Typography className={classes.information}>
          He's talking tough on clergy sexual abuse,
          but is he just another papal pervert protector?
          (thumbs down) or a true pedofile punishing pontiff?
          (thumbs up)
        </Typography>
        <Typography className={classes.moreInfo} variant="body2" component="p">
          More Information
        </Typography>
        <Typography className={classes.veredict} variant="h5" component="h5">
          What is your veredict?
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button variant="text" className="">
            <Icon className="fa fa-thumbs-up" />
          </Button>
          <Button variant="text">
            <Icon className="fa fa-thumbs-down" />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
