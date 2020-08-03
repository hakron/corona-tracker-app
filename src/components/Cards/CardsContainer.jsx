import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./CardsContainer.module.css";
import Cards from "./Cards";

const CardsContainer = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Cards
          title="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          text="Number of active cases of COVID-19"
          defaultStyle='infected'
        />
        <Cards
          title="Recoveries"
          value={recovered.value}
          lastUpdate={lastUpdate}
          text="Number of recoveries from COVID-19"
          defaultStyle='recovered'
        />
        <Cards
          title="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          text="Number of deaths caused by COVID-19"
          defaultStyle='death'
        />
      </Grid>
    </div>
  );
};

export default CardsContainer;
