import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'reactstrap';

class WarmupA extends Component {
    render() {
        const { weight, bar, isToggle } = this.props;
        
        let toggle = {display: isToggle? 'block' : 'none'}
        let rowCollapse; 
        if (isToggle) {
            rowCollapse = "row"
        } else {
            rowCollapse = "Row-Collapse"
        }
        function round(num) {
            return Math.round(num*2)/2;
        }
        
        return (
            <Row className={rowCollapse}>
                <Col style={toggle}>A</Col>
                <Col style={toggle}>40</Col>
                <Col style={toggle}>5</Col>
                <Col style={toggle}>{(round(weight*4/10)).toFixed(1)}</Col>        
                <Col style={toggle}>{((round(weight*4/10))-bar).toFixed(1)}</Col>        
            </Row>
        )
    }
}

export default WarmupA;