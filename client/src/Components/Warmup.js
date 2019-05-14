import React, { Component, Fragment } from "react";
import "../App.css";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { round } from "../actions/calculateFunctions";

class Warmup extends Component {
  state = {
    row1: ["A", 40, 5],
    row2: ["B", 50, 5],
    row3: ["C", 60, 5]
  };

  static propTypes = {
    warmUpToggle: PropTypes.bool
  };

  render() {
    const { weight, bar, warmUpToggle } = this.props;
    const { row1, row2, row3 } = this.state;

    return warmUpToggle ? (
      <Fragment>
        <Row>
          {row1.map(e => (
            <Col>{e}</Col>
          ))}
          <Col>{round((weight * 4) / 10).toFixed(1)}</Col>
          <Col>{(round((weight * 4) / 10) - bar).toFixed(1)}</Col>
        </Row>
        <Row>
          {row2.map(e => (
            <Col>{e}</Col>
          ))}
          <Col>{round((weight * 5) / 10).toFixed(1)}</Col>
          <Col>{(round((weight * 5) / 10) - bar).toFixed(1)}</Col>
        </Row>
        <Row>
          {row3.map(e => (
            <Col>{e}</Col>
          ))}
          <Col>{round((weight * 6) / 10).toFixed(1)}</Col>
          <Col>{(round((weight * 6) / 10) - bar).toFixed(1)}</Col>
        </Row>
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle
});

export default connect(mapStateToProps)(Warmup);
