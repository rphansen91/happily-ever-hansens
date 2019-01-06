import React from "react";
import { compose } from "redux";
import Modal from "@material-ui/core/Modal";
import { withInvitation } from "../../store/reducers/invitation";
import SetIsAttending from "../SetIsAttending";
import SetMeal from "../SetMeal";
import withInvitationSearchQuery from "../../queries/InvitationSearchQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles, Button } from "@material-ui/core";

const getModalStyle = () => ({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "100%",
  overflow: "scroll"
});

const style = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

const Invitation = ({ id, first_name, last_name, is_attending, meal }) => (
  <div>
    <h4>
      {first_name} {last_name}
    </h4>
    <SetIsAttending id={id} value={is_attending} />
    <SetMeal id={id} value={meal} />
  </div>
);

export default compose(
  withStyles(style),
  withInvitation,
  withInvitationSearchQuery
)(({ classes, invitation, closeInvitation, data, loading, error }) => (
  <Modal open={invitation.open} onClose={closeInvitation}>
    <div style={getModalStyle()} className={classes.paper}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>{error.message}</p>
      ) : data ? (
        <div>
          <Invitation {...data} />
          {data.plus_one && <Invitation {...data.plus_one} />}
          {(data.children || []).map(c => (
            <Invitation key={c.id} {...c} />
          ))}
          <Button variant="contained" color="primary" onClick={closeInvitation}>
            Submit
          </Button>
        </div>
      ) : (
        <div>We could not find your invitation</div>
      )}
    </div>
  </Modal>
));
