import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import React, { Component } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

class Inputs extends Component {
    render() {    
        let weight = this.props.weight;
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addon="prepend">1 rep max</InputGroupAddon>
                        <Input type="number" 
                            min='0' 
                            onChange={this.props.handleChange} 
                            value={weight}
                            onInput="validity.valid||(value='');" />
                        
                            <Button color='info' 
                                    size="sm" 
                                    onClick={this.props.isKilos}>
                            {!this.props.tMass? 'kg ' : 'lb '}{<FaExchangeAlt />}{this.props.tMass? ' kg' : ' lb'}
                            </Button>          
                </InputGroup>
                
                <br />

                <InputGroup>
                    <InputGroupAddon addon="prepend">
                    Bar (B)
                    </InputGroupAddon>
                        <Input type="number" 
                            min='0' 
                            onChange={this.props.lessBar} 
                            value={this.props.bar} />             
                        <Button color='info' 
                                size="sm" 
                                onClick={this.props.isBarKilos}>
                            {!this.props.bMass? 'kg ' : 'lb '}{<FaExchangeAlt />}{this.props.bMass? ' kg' : ' lb'}
                        </Button>
                </InputGroup>
                   
            </div>
        )
    }
}

export default Inputs;