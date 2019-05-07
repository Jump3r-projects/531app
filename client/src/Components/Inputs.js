import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

const Inputs = props => (
    <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">1 rep max</InputGroupAddon>
                <Input type="number" 
                    onChange={props.handleChange} 
                    value={props.weight} />
                
                    <Button color='info' 
                            size="sm" 
                            onClick={props.isKilos}>
                    {!props.tMass? 'kg ' : 'lb '}{<FaExchangeAlt />}{props.tMass? ' kg' : ' lb'}
                    </Button>
                    <Button color='danger'
                        size="sm"
                        onClick={props.resetWeight}>
                    Reset
                </Button>          
        </InputGroup>
        
        <br />

        <InputGroup>
            <InputGroupAddon addonType="prepend">
            Bar (B)
            </InputGroupAddon>
                <Input type="number" 
                    min='0' 
                    onChange={props.lessBar} 
                    value={props.bar} />             
                <Button color='info' 
                        size="sm" 
                        onClick={props.isBarKilos}>
                    {!props.bMass? 'kg ' : 'lb '}{<FaExchangeAlt />}{props.bMass? ' kg' : ' lb'}
                </Button>
                <Button color='danger'
                        size="sm"
                        onClick={props.resetBar}>
                    Reset
                </Button>          
        </InputGroup>
            
    </div>
)
    
export default Inputs;