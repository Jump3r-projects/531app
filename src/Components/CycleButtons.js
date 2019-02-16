import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../App.css';

class CycleButtons extends Component {
    render() {
        return (
        <div>
            <Button color="success"
                    size="sm"
                    className="SuccessButton"
                    onClick={this.props.warmupToggle}>
            Warm up
            </Button>{' '}
            <ButtonGroup>
                <Button color="primary"
                        size="sm"
                        className="PrimaryButton"
                        onClick={this.props.cycleA}
                        active={this.props.rSelected === 1}>
                Cycle A
                </Button>{' '}

                <Button color="primary"
                        size="sm"
                        className="PrimaryButton"
                        onClick={this.props.cycleB}
                        active={this.props.rSelected === 2}>
                Cycle B
                </Button>{' '}

                <Button color="primary"                    
                        size="sm"
                        className="PrimaryButton"
                        onClick={this.props.cycleC}
                        active={this.props.rSelected === 3}>
                Cycle C
                </Button>

            </ButtonGroup>{' '}

            <Button color="danger"
                    size="sm"
                    className="DangerButton"
                    onClick={this.props.deload}>
            Deload
            </Button>{' '}
            
        </div>
        )
    }
}

export default CycleButtons;