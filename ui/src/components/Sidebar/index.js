import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import { withMenu } from "../../store/reducers/menu";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import HotelIcon from "@material-ui/icons/Hotel";

const styles = {
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
};

function Sidebar({ classes, menu, closeMenu, toggleMenu }) {
  return (
    <Drawer open={menu.open} onClose={closeMenu}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
      >
        <List>
          <NavLink exact to="/home" className={classes.link}>
            <ListItem button disableRipple>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </NavLink>
          <NavLink exact to="/event" className={classes.link}>
            <ListItem button disableRipple>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary={"Event"} />
            </ListItem>
          </NavLink>
          <NavLink exact to="/accommodations" className={classes.link}>
            <ListItem button disableRipple>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary={"Accommodations"} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Drawer>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withMenu
)(Sidebar);
