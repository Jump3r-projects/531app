import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'reactstrap';

class WarmupC extends Component {
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
                <Col style={toggle}>C</Col>
                <Col style={toggle}>60</Col>
                <Col style={toggle}>3</Col>
                <Col style={toggle}>{(round(weight*6/10)).toFixed(1)}</Col>
                <Col style={toggle}>{(Math.max(0,(round(weight*6/10))-bar)).toFixed(1)}</Col>        
            </Row>            
        )
    }
}

export default WarmupC;