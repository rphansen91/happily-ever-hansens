import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withSetIsAttendingMutation from "../../mutations/SetIsAttendingMutation";

export default withSetIsAttendingMutation(({ value, setIsAttending }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => setIsAttending(true)}
          value="checkedIsAttending"
          checked={value}
        />
      }
      label="Is Attending"
    />
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => setIsAttending(false)}
          value="checkedNotAttending"
          checked={!value}
        />
      }
      label="Not Attending"
    />
  </div>
));
