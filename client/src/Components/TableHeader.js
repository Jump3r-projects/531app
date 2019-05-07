import React from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

const TableHeader = () => (
    <Row className="RowHeader">
        <Col>Set #</Col>
        <Col>% of max</Col>
        <Col>Reps</Col>
        <Col>Weight (W)</Col>
        <Col>W - B</Col>
    </Row>
)

export default TableHeader;