import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";
import PropTypes from "prop-types";

class RowDyn extends Component {
  static propTypes = {
    weight: PropTypes.Number,
    barWeight: PropTypes.Number,
    round: PropTypes.func
  };
  render() {
    const { weight, barWeight, row } = this.props;
    const res1 = round((weight * row[1]) / 100);
    const res2 = round((weight * row[1]) / 100) - barWeight;
    return (
      <Fragment>
        <Col>{res1.toFixed(1)}</Col>
        <Col>{res2.toFixed(1)}</Col>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  weight: state.weight.weight,
  barWeight: state.weight.barWeight
});

export default connect(
  mapStateToProps,
  { round }
)(RowDyn);
