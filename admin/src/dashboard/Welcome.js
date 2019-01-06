import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  media: {
    height: "18em",
    backgroundPosition: "0 28%"
  }
};

const Welcome = ({ classes }) => (
  <Card>
    <CardContent>
      <Typography variant="headline" component="h2">
        Welcome to Meg Ryan Wedding Admin
      </Typography>
    </CardContent>
    <CardMedia image={`/images/welcome.jpg`} className={classes.media} />
    <CardActions style={{ justifyContent: "flex-end" }}>
      <Button href="/#/guest">
        <HomeIcon style={{ paddingRight: "0.5em" }} />
        View Guests
      </Button>
      <Button href="/#/guest/create">
        <AddIcon style={{ paddingRight: "0.5em" }} />
        Add Guest
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Welcome);
