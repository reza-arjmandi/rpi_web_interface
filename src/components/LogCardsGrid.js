import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import LogCard from './LogCard';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    card: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function LogCardsGrid({ 
  is_fetching, cards, update_log, delete_log, download_log }) {
  const classes = useStyles();

  if(is_fetching) {
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {cards ? cards.map((card) => {
        return(
            <Grid item xs={3}>
                <LogCard 
                  className={classes.card} 
                  {...card} 
                  update_log={update_log}
                  delete_log={delete_log}
                  download_log={download_log} />
            </Grid>
        );
      }) : null}
      </Grid>
    </div>
  );
}

LogCardsGrid.protoTypes = {
    cards: PropTypes.array.isRequired,
};