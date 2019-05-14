import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import DeloadR1Dyn from "./DeloadR1Dyn";

class DeloadR1 extends Component {
  state = {
    row: [1, 40, 5]
  };
  render() {
    const { row } = this.state;
    return (
      <Fragment>
        <Row className="row">
          {row.map(e => (
            <Col>{e}</Col>
          ))}
          <DeloadR1Dyn />
        </Row>
      </Fragment>
    );
  }
}

export default DeloadR1;
