import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';
import TableHeader from './TableHeader';
import WarmupA from './WarmupA';
import WarmupB from './WarmupB';
import WarmupC from './WarmupC';

class CycleA extends Component {
    render() {
        let weight = this.props.weight;
        let bar = this.props.bar;
        let round = this.props.round;
        let totalWeight; 
        if(this.props.isToggle) {
            totalWeight = this.props.cycleATotal + this.props.warmupTotal;
        } else {
            totalWeight = this.props.cycleATotal;
        }

        return (
            <div className='Cycle'>
                <Container className='Table'>

                    <TableHeader />
                    <WarmupA isToggle={this.props.isToggle} weight={weight} bar={bar}/>
                    <WarmupB isToggle={this.props.isToggle} weight={weight} bar={bar}/>
                    <WarmupC isToggle={this.props.isToggle} weight={weight} bar={bar}/>

                    <Row className="row">
                        <Col>1</Col>
                        <Col>65</Col>
                        <Col>5</Col>
                        <Col>{(round(weight*65/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*65/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>2</Col>
                        <Col>75</Col>
                        <Col>5</Col>
                        <Col>{(round(weight*75/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*75/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>3</Col>
                        <Col>85</Col>
                        <Col>
                            <span style={{textDecoration: "underline"}} href="#" id="tooltipA">5+</span>
                            <UncontrolledTooltip placement="bottom" target="tooltipA">As many as you can</UncontrolledTooltip>
                        </Col>
                        <Col>{(round(weight*85/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*85/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="RowHeader">
                        <Col>Total Weight</Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>{round(totalWeight).toFixed(1)}+</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            )
    }
}

export default CycleA;