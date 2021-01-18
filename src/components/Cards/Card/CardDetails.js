import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './CardDetails.module.css';

const CardDetails = ({ className, cardTitle, totalValue, value }) => (
  <Grid item  xs={4} sm={3} md={2} lg={2} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
        {totalValue}
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary">
        {value}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardDetails;
