import React, { Component, PropTypes } from "react";
// import classnames from "classnames";
import TickTock from "tick-tock";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const styles = {
  card: {
    padding: 16
  }
};

/**
 * Hide contents until the count down has passed.
 *
 * @constructor
 * @public
 */
class Countdown extends Component {
  constructor(props) {
    super(...arguments);

    this.timers = new TickTock();
    this.tick = this.tick.bind(this);
    this.state = this.diff(props.date);
  }

  /**
   * Start the interval.
   *
   * @private
   */
  componentDidMount() {
    this.timers.setInterval("update", this.tick, 1000);
  }

  /**
   * Stop the interval.
   *
   * @private
   */
  componentWillUnmount() {
    this.timers.clear("update");
  }

  /**
   * Update the component when we receive a new date.
   *
   * @param {Object} next The new props.
   * @private
   */
  componentWillReceiveProps(next) {
    if (this.props.date === next.date) return;

    this.timers.clear("update");
    this.timers.setInterval("update", this.tick, 1000);
    this.setState(this.diff(next.date));
  }

  /**
   * Update the state.
   *
   * @private
   */
  tick() {
    const next = this.diff(this.props.date);

    //
    // Stop updating if the timer has passed and we don't want to show negative
    // countdowns.
    //
    if (next.passed) {
      this.timers.clear("update");

      //
      // This is the first time that we've set the state as passed so we can
      // call the completion callback if specified.
      //
      if (!this.state.passed && this.props.passed) {
        this.props.passed(next);
      }
    }

    this.setState(next);
  }

  /**
   * Calculate the difference between now and the supplied date.
   *
   * @param {String|Date} date The new date.
   * @returns {Object} Formatted difference between dates.
   * @private
   */
  diff(date) {
    date = new Date(date);

    const now = Date.now();
    const diff = date - now;
    const days = parseInt(diff / (24 * 3600 * 1000));
    const hours = parseInt(diff / (3600 * 1000) - days * 24);
    const mins = parseInt(diff / (60 * 1000) - days * 24 * 60 - hours * 60);
    const secs = parseInt(
      diff / 1000 - mins * 60 - days * 24 * 60 * 60 - hours * 60 * 60
    );

    const finalcountdown =
      days === 0 && hours === 0 && mins === 0 && secs <= 10;

    return {
      passed: now > +date,
      final: finalcountdown,

      days: days,
      hours: hours,
      mins: mins,
      secs: secs
    };
  }

  /**
   * Apply leading zero to the supplied value.
   *
   * @param {Number|String} value Thing that needs to have a 0 prepended.
   * @returns {String} The new value
   * @private
   */
  zero(value) {
    value = value.toString();

    if (value.length >= 2) return value;
    return "0" + value;
  }

  /**
   * Render the countdown timer.
   *
   * @private
   */
  render() {
    const { passed, days, hours, mins, secs, final } = this.state;
    const { classes } = this.props;

    //
    // We haven't received a valid date yet, we're going to assume that we are
    // waiting to receive a working state from an async update. Until then we're
    // not going to display anything.
    //
    if (isNaN(days)) return null;

    //
    // Time has passed, show the children.
    //
    if (passed)
      return <div className="countdown inactive">{this.props.children}</div>;

    // const finalcountdown = classnames("secs", {
    //   finalcountdown: final
    // });

    return (
      <div className="countdown active">
        {this.props.prefix}

        <Conditional value={days}>
          <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
              {days == 1 ? "Day" : "Days"}
            </Typography>
            <Typography variant="headline" component="h1">
              {days}
            </Typography>
          </Card>
        </Conditional>

        <Conditional value={hours}>
          <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
              Hours
            </Typography>
            <Typography variant="headline" component="h1">
              {this.zero(hours)}
            </Typography>
          </Card>
        </Conditional>

        <Conditional value={mins}>
          <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
              Minutes
            </Typography>
            <Typography variant="headline" component="h1">
              {this.zero(mins)}
            </Typography>
          </Card>
        </Conditional>

        <Conditional value={secs} negative>
          <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
              Seconds
            </Typography>
            <Typography variant="headline" component="h1">
              {this.zero(secs)}
            </Typography>
          </Card>
        </Conditional>
      </div>
    );
  }
}

/**
 * Simple helper component which will make some conditional statements easier to
 * read.
 *
 * @param {Object} props Properties of the component.
 * @returns {Component}
 * @private
 */
function Conditional(props) {
  const allowed = props.negative ? props.value >= 0 : props.value > 0;

  if (allowed) return <div>{props.children}</div>;

  return null;
}

export default withStyles(styles)(Countdown);
