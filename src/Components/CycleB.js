import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, UncontrolledTooltip } from 'reactstrap';
import TableHeader from './TableHeader';
import WarmupA from './WarmupA';
import WarmupB from './WarmupB';
import WarmupC from './WarmupC';

class CycleB extends Component {
    render() {
        let weight = this.props.weight;
        let bar = this.props.bar;
        let round = this.props.round;
        let totalWeight; 
        if(this.props.isToggle) {
            totalWeight = this.props.cycleBTotal + this.props.warmupTotal;
        } else {
            totalWeight = this.props.cycleBTotal;
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
                        <Col>70</Col>
                        <Col>3</Col>
                        <Col>{(round(weight*70/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*70/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>2</Col>
                        <Col>80</Col>
                        <Col>3</Col>
                        <Col>{(round(weight*80/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*80/100))-bar).toFixed(1)}</Col>
                    </Row>
                    <Row className="row">
                        <Col>3</Col>
                        <Col>90</Col>
                        <Col>
                            <span style={{textDecoration: "underline"}} href="#" id="tooltipB">3+</span>
                            <UncontrolledTooltip placement="bottom" target="tooltipB">As many as you can</UncontrolledTooltip>
                        </Col>
                        <Col>{(round(weight*90/100)).toFixed(1)}</Col>
                        <Col>{((round(weight*90/100))-bar).toFixed(1)}</Col>
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

export default CycleB;