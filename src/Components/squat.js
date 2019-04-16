import React, { Component } from 'react';
import CycleA from './CycleA';
import CycleB from './CycleB';
import CycleC from './CycleC';
import Deload from './Deload';
import CycleButtons from './CycleButtons';
import Inputs from './Inputs';
import '../App.css';

class Squat extends Component {
    state = {
        weight: [0],
        bar: [0],
        isToggle: false,
        isKilos: false,
        isBarKilos: false,
        isDeload: false,
        isCycleA: true,
        isCycleB: false,
        isCycleC: false,
        rSelected: 1,
        warmupTotal: 0,
        cycleATotal: 0,
        cycleBTotal: 0,
        cycleCTotal: 0,
    }
    
    onRadioBtnClick = rSelected => {
        this.setState({ rSelected });
      }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            weight: e.target.value,
            warmupTotal: e.target.value*4/10*5+e.target.value*5/10*5+e.target.value*6/10*3,
            cycleATotal: e.target.value*65/100*5+e.target.value*75/100*5+e.target.value*85/100*5,
            cycleBTotal: e.target.value*70/100*3+e.target.value*80/100*3+e.target.value*90/100*3,
            cycleCTotal: e.target.value*75/100*5+e.target.value*85/100*3+e.target.value*95/100*1,
        })
    }   

    lessBar = e => {
        e.preventDefault();
        this.setState({
            bar: e.target.value,
        })
    }   

    warmupToggle = () => {
        this.setState({
            isToggle: !this.state.isToggle,
        })
    }

    isKilos = () => {
        const { isKilos, weight } = this.state;
       this.setState({
           isKilos: !isKilos,
       })

       if(isKilos === false) {
            this.setState({
                weight: weight / 0.45359237,
                warmupTotal: (weight*40/100*5+weight*50/100*5+weight*60/100*3) / 0.45359237,
                cycleATotal: (weight*65/100*5+weight*75/100*5+weight*85/100*5) / 0.45359237,
                cycleBTotal: (weight*70/100*3+weight*80/100*3+weight*90/100*3) / 0.45359237,
                cycleCTotal: (weight*75/100*5+weight*85/100*3+weight*95/100*1) / 0.45359237,
            })
       } else {
        this.setState({
            weight: weight * 0.45359237,
            warmupTotal: (weight*40/100*5+weight*50/100*5+weight*60/100*3) * 0.45359237,
            cycleATotal: (weight*65/100*5+weight*75/100*5+weight*85/100*5) * 0.45359237,
            cycleBTotal: (weight*70/100*3+weight*80/100*3+weight*90/100*3) * 0.45359237,
            cycleCTotal: (weight*75/100*5+weight*85/100*3+weight*95/100*1) * 0.45359237,
    })
       }
    }

    isBarKilos = () => {
        const { isBarKilos, bar } = this.state;
        this.setState({
            isBarKilos: !isBarKilos,
        })
 
        if(isBarKilos === false) {
             this.setState({
                 bar: bar / 0.45359237,
             })
        } else {
         this.setState({
             bar: bar * 0.45359237,
         })
        }
     }

     cycleA = () => {
        this.setState({
            isCycleA: true,
            isCycleB: false,
            isCycleC: false,
            isDeload: false,
            rSelected: 1,
        })
    }

    cycleB = () => {
       this.setState({
           isCycleA: false,
           isCycleB: true,
           isCycleC: false,
           isDeload: false,
           rSelected: 2,
       })
   }

   cycleC = () => {
       this.setState({
           isCycleA: false,
           isCycleB: false,
           isCycleC: true,
           isDeload: false,
           rSelected: 3,
       })
   }

   deload = () => {
       this.setState({
           isCycleA: false,
           isCycleB: false,
           isCycleC: false,
           isDeload: true,
           rSelected: 0,
       })
   }

    resetWeight = () => {
        this.setState({
            weight: [0]
        })
    }

    resetBar = () => {
        this.setState({
            bar: [0]
        })
    }
    
    render() {
        const { bar, rSelected, isCycleA, isCycleB, isCycleC, cycleATotal, cycleBTotal, cycleCTotal, warmupTotal, isKilos, isBarKilos, isDeload, isToggle, weight } = this.state;
        function round(num) {
            return Math.round(num*2)/2;
        }

            return (
                <div className="body">
                    <div className="liftHeader">BENCH</div> 
                    <Inputs className="Inputs"
                            handleChange={this.handleChange}
                            lessBar={this.lessBar}
                            isBarKilos={this.isBarKilos}
                            isKilos={this.isKilos}
                            resetWeight={this.resetWeight}
                            resetBar={this.resetBar}
                            bar={bar}
                            weight={weight}
                            tMass={isKilos}
                            bMass={isBarKilos}
                            round={round}
                    />
                    <div className="Cycle-Buttons">
                    <CycleButtons warmupToggle={this.warmupToggle} 
                                  deload={this.deload} 
                                  cycleA={this.cycleA} 
                                  cycleB={this.cycleB} 
                                  cycleC={this.cycleC}
                                  rSelected={rSelected}
                    />  
                    </div>    
                    <div>
                        <div style={{ display: isCycleA ? 'inline' : 'none' }}>
                            <CycleA weight={weight} 
                                    bar={bar} 
                                    isToggle={isToggle} 
                                    round={round}
                                    cycleATotal={cycleATotal}
                                    warmupTotal={warmupTotal}
                                    tMass={isKilos}
                                    bMass={isBarKilos}
                                    />
                        </div>
                        <div style={{ display: isCycleB ? 'inline' : 'none' }}>
                            <CycleB weight={weight} 
                                    bar={bar} 
                                    isToggle={isToggle} 
                                    round={round}
                                    cycleBTotal={cycleBTotal}
                                    warmupTotal={warmupTotal}
                                    tMass={isKilos}
                                    bMass={isBarKilos}
                                    />
                        </div>
                        <div style={{ display: isCycleC ? 'inline' : 'none' }}>
                            <CycleC weight={weight} 
                                    bar={bar} 
                                    isToggle={isToggle} 
                                    round={round}
                                    cycleCTotal={cycleCTotal}
                                    warmupTotal={warmupTotal}
                                    tMass={isKilos}
                                    bMass={isBarKilos}
                                    />
                        </div>
                        <div style={{ display: isDeload ? 'inline' : 'none' }}>
                            <Deload weight={weight} 
                                    bar={bar}
                                    round={round}
                                    tMass={isKilos}
                                    bMass={isBarKilos}
                                    />
                        </div>
                    </div>
                </div>                
            )
    }   
}

export default Squat