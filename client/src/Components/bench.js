import React, { Component } from "react";
import Cycles from "./cycle/Cycles";
import { connect } from "react-redux";
import CycleButtons from "./cycle/CycleButtons";
import Inputs from "./Inputs";
import { round } from "../actions/calculateFunctions";
import { setWeight, setBarWeight } from "../actions/weightActions";

class Bench extends Component {
  state = {
    weight: [0],
    bar: [0],
    isKilos: false,
    isBarKilos: false,
    warmupTotal: 0,
    cycleATotal: 0,
    cycleBTotal: 0,
    cycleCTotal: 0
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      weight: e.target.value,
      warmupTotal:
        ((e.target.value * 4) / 10) * 5 +
        ((e.target.value * 5) / 10) * 5 +
        ((e.target.value * 6) / 10) * 3,
      cycleATotal:
        ((e.target.value * 65) / 100) * 5 +
        ((e.target.value * 75) / 100) * 5 +
        ((e.target.value * 85) / 100) * 5,
      cycleBTotal:
        ((e.target.value * 70) / 100) * 3 +
        ((e.target.value * 80) / 100) * 3 +
        ((e.target.value * 90) / 100) * 3,
      cycleCTotal:
        ((e.target.value * 75) / 100) * 5 +
        ((e.target.value * 85) / 100) * 3 +
        ((e.target.value * 95) / 100) * 1
    });
  };

  lessBar = e => {
    e.preventDefault();
    this.setState({
      bar: e.target.value
    });
  };

  isKilos = () => {
    const { isKilos, weight } = this.state;
    this.setState({
      isKilos: !isKilos
    });

    if (isKilos === false) {
      this.setState({
        weight: weight / 0.45359237,
        warmupTotal:
          (((weight * 40) / 100) * 5 +
            ((weight * 50) / 100) * 5 +
            ((weight * 60) / 100) * 3) /
          0.45359237,
        cycleATotal:
          (((weight * 65) / 100) * 5 +
            ((weight * 75) / 100) * 5 +
            ((weight * 85) / 100) * 5) /
          0.45359237,
        cycleBTotal:
          (((weight * 70) / 100) * 3 +
            ((weight * 80) / 100) * 3 +
            ((weight * 90) / 100) * 3) /
          0.45359237,
        cycleCTotal:
          (((weight * 75) / 100) * 5 +
            ((weight * 85) / 100) * 3 +
            ((weight * 95) / 100) * 1) /
          0.45359237
      });
    } else {
      this.setState({
        weight: weight * 0.45359237,
        warmupTotal:
          (((weight * 40) / 100) * 5 +
            ((weight * 50) / 100) * 5 +
            ((weight * 60) / 100) * 3) *
          0.45359237,
        cycleATotal:
          (((weight * 65) / 100) * 5 +
            ((weight * 75) / 100) * 5 +
            ((weight * 85) / 100) * 5) *
          0.45359237,
        cycleBTotal:
          (((weight * 70) / 100) * 3 +
            ((weight * 80) / 100) * 3 +
            ((weight * 90) / 100) * 3) *
          0.45359237,
        cycleCTotal:
          (((weight * 75) / 100) * 5 +
            ((weight * 85) / 100) * 3 +
            ((weight * 95) / 100) * 1) *
          0.45359237
      });
    }
  };

  isBarKilos = () => {
    const { isBarKilos, bar } = this.state;
    this.setState({
      isBarKilos: !isBarKilos
    });

    if (isBarKilos === false) {
      this.setState({
        bar: bar / 0.45359237
      });
    } else {
      this.setState({
        bar: bar * 0.45359237
      });
    }
  };

  resetWeight = () => {
    this.setState({
      weight: [0]
    });
  };

  resetBar = () => {
    this.setState({
      bar: [0]
    });
  };

  render() {
    const {
      bar,
      //   cycleATotal,
      //   cycleBTotal,
      //   cycleCTotal,
      //   warmupTotal,
      isKilos,
      isBarKilos,
      weight
    } = this.state;

    return (
      <div className="body">
        <div className="liftHeader">BENCH</div>
        <Inputs
          className="Inputs"
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
          <CycleButtons />
        </div>
        <Cycles />
      </div>
    );
  }
}

export default connect(
  null,
  { round, setWeight, setBarWeight }
)(Bench);
