import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        return (
            <InputGroup>
                    <InputGroupAddon addon="prepend">Enter 1 rep max</InputGroupAddon>
                    <Input type="number" 
                        min='0' 
                        onChange={this.props.handleChange} 
                        value={this.props.weight}>
                    </Input>
                    <InputGroupAddon addon="append">
                        <Button className='btn' 
                                size="sm" 
                                onClick={this.props.isKilos}>
                        kg
                        </Button>
                    </InputGroupAddon>
                    <InputGroupAddon addon="prepend">Bar (B)</InputGroupAddon>
                    <Input type="number" 
                        min='0' 
                        onChange={this.props.lessBar} 
                        value={this.props.bar}>
                    </Input>
                    <InputGroupAddon addon="append">
                        <Button className='btn' 
                                size="sm" 
                                onClick={this.props.isBarKilos}>
                        kg
                        </Button>
                    </InputGroupAddon>
            </InputGroup>
        )
    }
}

export default Inputs;