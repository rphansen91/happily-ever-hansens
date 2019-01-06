import React, { Fragment } from "react";
import { Title } from "react-admin";
import Welcome from "./Welcome";
import Metric from "./Metric";
import Countdown from "./Countdown";
import PeopleIcon from "@material-ui/icons/People";
import AirplanemodeActive from "@material-ui/icons/AirplanemodeActive";
import EmailIcon from "@material-ui/icons/Email";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const dashQuery = gql`
  query Dashboard {
    total_guests
    submitted
    attending
  }
`;

const Spacer = () => <div style={{ height: 20 }} />;

export const Dashboard = () => (
  <Fragment>
    <Title title="Dashbord Admin" />
    <Welcome />
    <Spacer />
    <Countdown date={process.env.REACT_APP_WEDDING_DATE} />
    <Spacer />
    <Query query={dashQuery}>
      {({ data }) => (
        <div style={{ display: "flex" }}>
          <Metric name="Guests" value={data.total_guests} icon={PeopleIcon} />
          <Metric name="Submitted" value={data.submitted} icon={EmailIcon} />
          <Metric
            name="Attending"
            value={data.attending}
            icon={AirplanemodeActive}
          />
        </div>
      )}
    </Query>
    <Spacer />
  </Fragment>
);
