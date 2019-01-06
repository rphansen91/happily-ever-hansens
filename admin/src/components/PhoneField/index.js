import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";

const styles = {
  link: {
    textDecoration: "none"
  },
  icon: {
    width: "0.5em",
    paddingRight: 2,
    verticalAlign: "middle"
  }
};

const PhoneField = ({ record = {}, source, classes }) =>
  record[source] ? (
    <a href={`tel:${record[source]}`} className={classes.link}>
      <PhoneIcon className={classes.icon} />
      {record[source]}
    </a>
  ) : (
    <span />
  );

export default withStyles(styles)(PhoneField);
