import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
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

export default function LogCardsGrid({cards}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {cards.map((card) => {
        return(
            <Grid item xs={3}>
                <LogCard className={classes.card} {...card} />
            </Grid>
        );
      })}
      </Grid>
    </div>
  );
}

LogCardsGrid.protoTypes = {
    cards: PropTypes.array.isRequired,
};