import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames'
import styles from "./Cards.module.css";

export const Cards = ({ title, value, lastUpdate, text, defaultStyle }) => {
  return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[defaultStyle])}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Cards;
