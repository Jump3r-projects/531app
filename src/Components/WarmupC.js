import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'reactstrap';

class WarmupC extends Component {
    render() {
        let weight = this.props.weight;
        let bar = this.props.bar;
        let toggle = {display: this.props.isToggle? 'block' : 'none'}
        let rowCollapse; 
        if (this.props.isToggle) {
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