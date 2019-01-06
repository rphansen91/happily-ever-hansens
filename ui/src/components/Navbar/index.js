import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withMenu } from "../../store/reducers/menu";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Navbar({ classes, toggleMenu }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink className={classes.link} to="/">
              Happily Ever Hansens
            </NavLink>
          </Typography>
          <NavLink className={classes.link} activeClassName="d-none" to="/home">
            <Button color="inherit">RSVP</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withMenu
)(Navbar);
