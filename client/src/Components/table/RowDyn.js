import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";

class RowDyn extends Component {
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

export default connect(
  null,
  { round }
)(RowDyn);
