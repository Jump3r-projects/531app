import React, { Component } from "react";
import "../App.css";
import { Container, Row, Col } from "reactstrap";
import TableHeader from "./table/TableHeader";
import BlankTW from "./table/BlankTW";
import BlankRow from "./table/BlankRow";
import DeloadR1 from "./table/DeloadR1";
import { round } from "../actions/calculateFunctions";

class Deload extends Component {
  state = {
    row2: [2, 50, 5],
    row3: [3, 60, 5]
  };
  render() {
    const { weight, bar, tMass, bMass } = this.props;
    const { row2, row3 } = this.state;

    if (tMass === bMass) {
      return (
        <div className="Cycle">
          <Container className="Table">
            <TableHeader />
            <Row style={{ fontStyle: "italic", justifyContent: "center" }}>
              No Warm up
            </Row>
            <DeloadR1 />
            <Row className="row">
              {row2.map(e => (
                <Col>{e}</Col>
              ))}
              <Col>{round((weight * 50) / 100).toFixed(1)}</Col>
              <Col>{(round((weight * 50) / 100) - bar).toFixed(1)}</Col>
            </Row>
            <Row className="row">
              {row3.map(e => (
                <Col>{e}</Col>
              ))}
              <Col>{round((weight * 60) / 100).toFixed(1)}</Col>
              <Col>{(round((weight * 60) / 100) - bar).toFixed(1)}</Col>
            </Row>
            <Row className="RowHeader">
              <Col>Total Weight</Col>
              <Col />
              <Col />
              <Col>
                {round(weight * (4 / 10 + 5 / 10 + 6 / 10) * 5).toFixed(1)}
                {tMass === true && bMass === true ? " lb" : null}
                {tMass === false && bMass === false ? " kg" : null}
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
            <Row style={{ fontStyle: "italic", justifyContent: "center" }}>
              No Warm up
            </Row>
            <Row className="row">
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

export default Deload;
