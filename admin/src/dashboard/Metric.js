import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-admin";

import CardIcon from "./CardIcon";

const styles = {
  main: {
    flex: "1",
    margin: "20px 4px"
  },
  card: {
    overflow: "inherit",
    textAlign: "right",
    padding: 16,
    minHeight: 52
  }
};

const NbNewOrders = ({ name, value, icon, classes }) => (
  <div className={classes.main}>
    <CardIcon Icon={icon} bgColor="#ff9800" />
    <Card className={classes.card}>
      <Typography className={classes.title} color="textSecondary">
        {name}
      </Typography>
      <Typography variant="headline" component="h2">
        {value}
      </Typography>
    </Card>
  </div>
);

export default translate(withStyles(styles)(NbNewOrders));
