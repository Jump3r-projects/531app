import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import TableHeader from './TableHeader';

class Deload extends Component {
    render() {
        let weight = this.props.weight;
        let bar = this.props.bar;
        function round(num) {
            return Math.round(num*2)/2;
        }

        return (
            <div className='Cycle'>
                <Container className='Table'>
                    <TableHeader />
                    <Row style={{ fontStyle: "italic", justifyContent: "center" }}>No Warm up</Row>
                    <Row className="row">
                        <Col>1</Col>
                        <Col>40</Col>
                        <Col>5</Col>
                        <Col>{(round(weight*40/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*40/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>2</Col>
                        <Col>50</Col>
                        <Col>5</Col>
                        <Col>{(round(weight*50/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*50/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>3</Col>
                        <Col>60</Col>
                        <Col>5</Col>
                        <Col>{(round(weight*60/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*60/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="RowHeader">
                        <Col>Total Weight</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{(round(weight*(4/10+5/10+6/10)*5)).toFixed(1)}</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            )
    }
}

export default Deload;