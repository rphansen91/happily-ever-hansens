import React from "react";
import Countdown from "../../components/Countdown";
import InvitationSearch from "../../components/InvitationSearch";
import InvitationModal from "../../components/InvitationModal";
import Heart from "@material-ui/icons/Favorite";
import "./index.css";

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: "url(/images/welcome.jpg)",
  backgroundPosition: "center -100%",
  backgroundSize: "cover",
  filter: "brightness(50%)",
  zIndex: 0
};

export default () => (
  <div>
    <div className="position-relative jumbotron text-center">
      <div style={style} />
      <div className="position-relative">
        <div style={{ height: 120 }} />
        <h1 className="text-white">
          Ryan <Heart /> Megan
        </h1>
        <Countdown date={process.env.REACT_APP_WEDDING_DATE} />
      </div>
    </div>
    <div className="container">
      <InvitationSearch />
      <InvitationModal />
    </div>
  </div>
);
