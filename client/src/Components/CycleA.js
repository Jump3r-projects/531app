import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col } from "reactstrap";
import TableHeader from "./Table/TableHeader";
import Warmup from "./Warmup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { round } from "../actions/calculateFunctions";
import BlankTW from "./Table/BlankTW";
import BlankRow from "./Table/BlankRow";

class CycleA extends Component {
  state = {
    row1: [1, 65, 5],
    row2: [2, 75, 5],
    row3: [3, 85, "5+"]
  };

  static propTypes = {
    warmUpToggle: PropTypes.bool
  };

  render() {
    const {
      weight,
      bar,
      warmUpToggle,
      cycleATotal,
      warmupTotal,
      bMass,
      tMass
    } = this.props;
    const { row1, row2, row3 } = this.state;
    let totalWeight;

    warmUpToggle
      ? (totalWeight = cycleATotal + warmupTotal)
      : (totalWeight = cycleATotal);

    if (tMass === bMass) {
      return (
        <div className="Cycle">
          <Container className="Table">
            <TableHeader />
            <Warmup weight={weight} bar={bar} />
            <Row className="row">
              {row1.map(e => (
                <Col>{e}</Col>
              ))}
              <Col>{round((weight * 65) / 100).toFixed(1)}</Col>
              <Col>{(round((weight * 65) / 100) - bar).toFixed(1)}</Col>
            </Row>
            <Row className="row">
              {row2.map(e => (
                <Col>{e}</Col>
              ))}
              <Col>{round((weight * 75) / 100).toFixed(1)}</Col>
              <Col>{(round((weight * 75) / 100) - bar).toFixed(1)}</Col>
            </Row>
            <Row className="row">
              {row3.map(e => (
                <Col>{e}</Col>
              ))}
              <Col>{round((weight * 85) / 100).toFixed(1)}</Col>
              <Col>{(round((weight * 85) / 100) - bar).toFixed(1)}</Col>
            </Row>
            <Row className="RowHeader">
              <Col>Total Weight</Col>
              <Col />
              <Col />
              <Col>
                {round(totalWeight).toFixed(1)}
                {tMass === true && bMass === true ? " lb+" : null}
                {tMass === false && bMass === false ? " kg+" : null}
              </Col>
              <Col />
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="Cycle">
          <Container className="Table">
            <TableHeader />
            <Warmup weight={0} bar={0} />
            <Row className="row">
              {row1.map(e => (
                <Col>{e}</Col>
              ))}
              <BlankRow />
            </Row>
            <Row className="row">
              {row2.map(e => (
                <Col>{e}</Col>
              ))}
              <BlankRow />
            </Row>
            <Row className="row">
              {row3.map(e => (
                <Col>{e}</Col>
              ))}
              <BlankRow />
            </Row>
            <BlankTW />
            <Row className="row">
              <Col className="scaleWarning">Set both scales to kg or lb</Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle
});

export default connect(
  mapStateToProps,
  { round }
)(CycleA);
