import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";
import PropTypes from "prop-types";

class DeloadR1Dyn extends Component {
  state = {
    bar: 0,
    barWeight: 0
  };
  static propTypes = {
    weight: PropTypes.Number,
    barWeight: PropTypes.Number,
    round: PropTypes.func
  };
  render() {
    const { weight, barWeight } = this.props;
    let res1 = round((weight * 40) / 100).toFixed(1);
    let res2 = (round((weight * 40) / 100) - barWeight).toFixed(1);
    return (
      <Fragment>
        <Col>{NaN ? "0" : res1}</Col>
        <Col>{NaN ? "0" : res2}</Col>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  weight: state.weight,
  barWeight: state.barWeight
});

export default connect(
  mapStateToProps,
  { round }
)(DeloadR1Dyn);
