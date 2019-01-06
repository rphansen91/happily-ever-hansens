import { createReducer, createAction } from "redux-delta";
import { connect } from "react-redux";

const setFirstName = createAction("SET_FIRST_NAME");
const setLastName = createAction("SET_LAST_NAME");
const selectMeal = createAction("SELECT_MEAL");
const loadInvitation = createAction("LOAD_INVITATION");
const closeInvitation = createAction("CLOSE_INVITATION");

export const invitation = createReducer(
  {
    first_name: "",
    last_name: "",
    open: false
  },
  [
    setFirstName.case((_, first_name) => ({ first_name })),
    setLastName.case((_, last_name) => ({ last_name })),
    selectMeal.case((_, meal) => ({ meal })),
    loadInvitation.case(() => ({ open: true })),
    closeInvitation.case(() => ({ open: false }))
  ]
);

export const withInvitation = connect(
  ({ invitation }) => ({ invitation }),
  { setFirstName, setLastName, selectMeal, loadInvitation, closeInvitation }
);
