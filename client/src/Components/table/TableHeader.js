import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import "../../App.css";

const TableHeader = () => (
  <Fragment>
    <Row className="RowHeader">
      <Col className="no-pad">Set #</Col>
      <Col className="no-pad">% of max</Col>
      <Col className="no-pad">Reps</Col>
      <Col className="no-pad">Weight (W)</Col>
      <Col className="no-pad">W - B</Col>
    </Row>
  </Fragment>
);

export default TableHeader;
