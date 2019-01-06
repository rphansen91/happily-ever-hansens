import { createReducer, createAction } from "redux-delta";
import { connect } from "react-redux";

const openMenu = createAction("OPEN_MENU");
const closeMenu = createAction("CLOSE_MENU");
const toggleMenu = createAction("TOGGLE_MENU");

export const menu = createReducer({ open: false }, [
  openMenu.case(() => ({ open: true })),
  closeMenu.case(() => ({ open: false })),
  toggleMenu.case(({ open }) => ({ open: !open }))
]);

export const withMenu = connect(
  ({ menu }) => ({ menu }),
  { openMenu, closeMenu, toggleMenu }
);
