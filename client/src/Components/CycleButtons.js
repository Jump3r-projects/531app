import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../App.css';

const CycleButtons = props => (
        <div>
            <Button color="success"
                    size="sm"
                    className="SuccessButton"
                    onClick={props.warmupToggle}>
            Warm up
            </Button>{' '}
            <ButtonGroup>
                <Button color="primary"
                        size="sm"
                        className="PrimaryButton"
                        onClick={props.cycleA}
                        active={props.rSelected === 1}>
                Cycle A
                </Button>{' '}

                <Button color="primary"
                        size="sm"
                        className="PrimaryButton"
                        onClick={props.cycleB}
                        active={props.rSelected === 2}>
                Cycle B
                </Button>{' '}

                <Button color="primary"                    
                        size="sm"
                        className="PrimaryButton"
                        onClick={props.cycleC}
                        active={props.rSelected === 3}>
                Cycle C
                </Button>

            </ButtonGroup>{' '}

            <Button color="danger"
                    size="sm"
                    className="DangerButton"
                    onClick={props.deload}>
            Deload
            </Button>{' '}
        </div>
)


export default CycleButtons;