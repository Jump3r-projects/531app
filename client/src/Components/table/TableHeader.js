import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import "../../App.css";

const TableHeader = () => (
  <Fragment>
    <Row className="RowHeader">
      <Col>Set #</Col>
      <Col>% of max</Col>
      <Col>Reps</Col>
      <Col>Weight (W)</Col>
      <Col>W - B</Col>
    </Row>
  </Fragment>
);

export default TableHeader;
