import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Bench extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: [0],
            bar: [20],
            isToggle: false,
            isKilos: false,
            isBarKilos: false,
            isDeload: false,
            pc1: [65],
            pc2: [75],
            pc3: [85],
            rep1: [5],
            rep2: [5],
            rep3: [5],
        }

        this.handleChange = this.handleChange.bind(this);
        this.warmupClick = this.warmupClick.bind(this);
        this.isKilos = this.isKilos.bind(this);
        this.isBarKilos = this.isBarKilos.bind(this);
        this.cycleA = this.cycleA.bind(this);
        this.cycleB = this.cycleB.bind(this);
        this.cycleC = this.cycleC.bind(this);
        this.deload = this.deload.bind(this);
        this.lessBar = this.lessBar.bind(this);

    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value,
        })
    }   

    lessBar(f) {
        f.preventDefault();
        this.setState({
            bar: f.target.value,
        })
    }   

    warmupClick(e) {
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
            pc1: 65,
            pc2: 75,
            pc3: 85,
            rep1: 5,
            rep2: 5,
            rep3: 5,
        })
    }

    cycleB() {
        this.setState({
            pc1: 70,
            pc2: 80,
            pc3: 90,
            rep1: 3,
            rep2: 3,
            rep3: 3,
        })
    }

    cycleC() {
        this.setState({
            pc1: 75,
            pc2: 85,
            pc3: 95,
            rep1: 5,
            rep2: 3,
            rep3: 1,
        })
    }

    deload() {
        this.setState({
            pc1: 40,
            pc2: 50,
            pc3: 60,
            rep1: 5,
            rep2: 5,
            rep3: 5,
        })

        
    }

    render() {
        let bar = this.state.bar;
        let weight = this.state.value;
        let mass = !this.state.isKilos ? 'Kg' : 'Lb';
        let barMass = !this.state.isBarKilos ? 'Kg' : 'Lb';
        let pc1 = this.state.pc1;
        let pc2 = this.state.pc2;
        let pc3 = this.state.pc3;
        let rep1 = this.state.rep1;
        let rep2 = this.state.rep2;
        let rep3 = this.state.rep3;

        if (this.state.deload === true) {
            return (
                <div>
                    <div>
                    Bench: 
                        <span>
                            <input type="number" min='0' onChange={this.handleChange} value={weight}></input>
                            <Button onClick={this.isKilos}>{mass}</Button>
                        </span>
                    </div>
                    <div>
                    Bar:
                        <span>
                            <input type="number" min='0' onChange={this.lessBar} value={bar}></input>
                            <Button onClick={this.isBarKilos}>{barMass}</Button>
                        </span>
                    </div>
                    <div>
                        <Button className="btn btn-primary"
                                onClick={this.warmupClick}>
                                Warm up
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleA}>
                                Cycle A
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleB}>
                                Cycle B
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleC}>
                                Cycle C
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.deload}>
                                Deload
                        </Button>
    
                        <div className='container'
                             style={{display: this.state.isToggle ? 'block' : 'none'}} 
                             >
                            <div>40% Warmup Set 1 x 5 : {Math.round((weight-bar)*4/10).toFixed(1)}{mass}</div>
                            <div>50% Warmup Set 2 x 5 : {Math.round((weight-bar)*5/10).toFixed(1)}{mass}</div>
                            <div>60% Warmup Set 3 x 3 : {Math.round((weight-bar)*6/10).toFixed(1)}{mass}</div>
                        </div>
                    </div>
    
                    <div>{pc1}%: Working Set 1 {rep1}x {Math.round((weight-bar)*pc1/100).toFixed(1)}{mass}</div>
                    <div>{pc2}%: Working Set 2 {rep2}x {Math.round((weight-bar)*pc2/100).toFixed(1)}{mass}</div>
                    <div>{pc3}%: Working Set 3 {rep3}x+ {Math.round((weight-bar)*pc3/100).toFixed(1)}{mass}</div>
    
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                    Bench: 
                        <span>
                            <input type="number" min='0' onChange={this.handleChange} value={weight}></input>
                            <Button onClick={this.isKilos}>{mass}</Button>
                        </span>
                    </div>
                    <div>
                    Bar:
                        <span>
                            <input type="number" min='0' onChange={this.lessBar} value={bar}></input>
                            <Button onClick={this.isBarKilos}>{barMass}</Button>
                        </span>
                    </div>
                    <div>
                        <Button className="btn btn-primary">
                                Warm up
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleA}>
                                Cycle A
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleB}>
                                Cycle B
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.cycleC}>
                                Cycle C
                        </Button>
                        <Button className="btn btn-primary"
                                onClick={this.deload}>
                                Deload
                        </Button>
                    </div>
                    <div>{pc1}%: Working Set 1 {rep1}x {Math.round((weight-bar)*pc1/100).toFixed(1)}{mass}</div>
                    <div>{pc2}%: Working Set 2 {rep2}x {Math.round((weight-bar)*pc2/100).toFixed(1)}{mass}</div>
                    <div>{pc3}%: Working Set 3 {rep3}x+ {Math.round((weight-bar)*pc3/100).toFixed(1)}{mass}</div>
    
                </div>
            )
        }
        
    }
}

export default Bench