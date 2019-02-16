import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../App.css';

class TableHeader extends Component {
    render() {
        return (
            <Row className="RowHeader">
                <Col>Set #</Col>
                <Col>% of max</Col>
                <Col>Reps</Col>
                <Col>Weight (W)</Col>
                <Col>W - B</Col>
            </Row>
        )
    }
}

export default TableHeader;