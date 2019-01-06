import React from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { withInvitation } from "../../store/reducers/invitation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  txt: {
    margin: "4px"
  },
  btn: {
    margin: "4px",
    height: 56
  }
};

export default compose(
  withStyles(styles),
  withInvitation
)(({ classes, invitation, setFirstName, setLastName, loadInvitation }) => (
  <div className="text-center">
    <h2 className="mb-4">Find Invitation</h2>
    <form
      onSubmit={ev => {
        ev.preventDefault();
        loadInvitation();
      }}
    >
      <TextField
        id="first-name"
        label="First Name"
        className={classes.txt}
        value={invitation.first_name}
        onChange={ev => setFirstName(ev.target.value)}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="last-name"
        label="Last Name"
        className={classes.txt}
        value={invitation.last_name}
        onChange={ev => setLastName(ev.target.value)}
        margin="normal"
        variant="outlined"
      />
      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </form>
  </div>
));
