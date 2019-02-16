import React, { Component } from 'react';
import CycleA from './CycleA';
import CycleB from './CycleB';
import CycleC from './CycleC';
import Deload from './Deload';
import CycleButtons from './CycleButtons';
import Inputs from './Inputs';
import './bench.css';


class Bench extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: [0],
            bar: [0],
            isToggle: false,
            isKilos: false,
            isBarKilos: false,
            isDeload: false,
            isCycleA: true,
            isCycleB: false,
            isCycleC: false,
            rSelected: 1,
            warmupTotal: [],
            cycleATotal: [],
            cycleBTotal: [],
            cycleCTotal: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.isKilos = this.isKilos.bind(this);
        this.isBarKilos = this.isBarKilos.bind(this);
        this.lessBar = this.lessBar.bind(this);
        this.warmupToggle = this.warmupToggle.bind(this);
        this.cycleA = this.cycleA.bind(this);
        this.cycleB = this.cycleB.bind(this);
        this.cycleC = this.cycleC.bind(this);
        this.deload = this.deload.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value,
            warmupTotal: e.target.value*4/10*5+e.target.value*5/10*5+e.target.value*6/10*3,
            cycleATotal: e.target.value*65/100*5+e.target.value*75/100*5+e.target.value*85/100*5,
            cycleBTotal: e.target.value*70/100*3+e.target.value*80/100*3+e.target.value*90/100*3,
            cycleCTotal: e.target.value*75/100*5+e.target.value*85/100*3+e.target.value*95/100*1,
        })
    
    }   

    lessBar(f) {
        f.preventDefault();
        this.setState({
            bar: f.target.value,
        })
    }   

    warmupToggle(e) {
        this.setState({
            isToggle: !this.state.isToggle,
        })
    }

    isKilos(e) {
       this.setState({
           isKilos: !this.state.isKilos,
       })

       if(this.state.isKilos === false) {
            this.setState({
                value: Math.round(this.state.value / 0.45359237).toFixed(1),
            })
       } else {
        this.setState({
            value: Math.round(this.state.value * 0.45359237).toFixed(1),
        })
       }
    }

    isBarKilos(e) {
        this.setState({
            isBarKilos: !this.state.isBarKilos,
        })
 
        if(this.state.isBarKilos === false) {
             this.setState({
                 bar: Math.round(this.state.bar / 0.45359237).toFixed(1),
             })
        } else {
         this.setState({
             bar: Math.round(this.state.bar * 0.45359237).toFixed(1),
         })
        }
     }

     cycleA() {
         this.setState({
             isCycleA: true,
             isCycleB: false,
             isCycleC: false,
             isDeload: false,
             rSelected: 1,
         })
     }

     cycleB() {
        this.setState({
            isCycleA: false,
            isCycleB: true,
            isCycleC: false,
            isDeload: false,
            rSelected: 2,
        })
    }

    cycleC() {
        this.setState({
            isCycleA: false,
            isCycleB: false,
            isCycleC: true,
            isDeload: false,
            rSelected: 3,
        })
    }

    deload() {
        this.setState({
            isCycleA: false,
            isCycleB: false,
            isCycleC: false,
            isDeload: true,
            rSelected: 0,
        })
    }


    
    render() {
        let bar = this.state.bar;
        let weight = this.state.value;
        function round(num) {
            return Math.round(num*2)/2;
        }

            return (
                <div className="body">
                    <Inputs handleChange={this.handleChange}
                            bar={bar}
                            weight={weight}
                            lessBar={this.lessBar}
                            isBarKilos={this.isBarKilos}
                            isKilos={this.isKilos}
                            className="Inputs"
                    />
                    <div className="Cycle-Buttons">
                        <CycleButtons warmupToggle={this.warmupToggle} 
                                      deload={this.deload} 
                                      cycleA={this.cycleA} 
                                      cycleB={this.cycleB} 
                                      cycleC={this.cycleC}
                                      rSelected={this.state.rSelected}
                        />  
                    </div>
                    
                    <div>
                        <div style={{ display: this.state.isCycleA ? 'inline' : 'none' }}>
                            <CycleA weight={weight} 
                                    bar={bar} 
                                    isToggle={this.state.isToggle} 
                                    round={round}
                                    cycleATotal={this.state.cycleATotal}
                                    warmupTotal={this.state.warmupTotal}
                                    />
                        </div>
                        <div style={{ display: this.state.isCycleB ? 'inline' : 'none' }}>
                            <CycleB weight={weight} 
                                    bar={bar} 
                                    isToggle={this.state.isToggle} 
                                    round={round}
                                    cycleBTotal={this.state.cycleBTotal}
                                    warmupTotal={this.state.warmupTotal}
                                    />
                        </div>
                        <div style={{ display: this.state.isCycleC ? 'inline' : 'none' }}>
                            <CycleC weight={weight} 
                                    bar={bar} 
                                    isToggle={this.state.isToggle} 
                                    round={round}
                                    cycleCTotal={this.state.cycleCTotal}
                                    warmupTotal={this.state.warmupTotal}
                                    />
                        </div>
                        <div style={{ display: this.state.isDeload ? 'inline' : 'none' }}>
                            <Deload weight={weight} 
                                    bar={bar}
                                    round={round}
                                    />
                        </div>
                    </div>
                </div>
            )
    }   
}

export default Bench