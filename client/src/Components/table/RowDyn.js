import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";
import PropTypes from "prop-types";

class RowDyn extends Component {
  static propTypes = {
    weight: PropTypes.number,
    barWeight: PropTypes.number,
    round: PropTypes.func
  };

  render() {
    const { weight, barWeight, row } = this.props;
    return (
      <Fragment>
        <Col className="no-pad">
          {round((weight * row[1]) / 100).toFixed(1)}
        </Col>
        <Col className="no-pad">
          {(round((weight * row[1]) / 100) - barWeight).toFixed(1)}
        </Col>
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
