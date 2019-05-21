import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import CycleButtons from "./cycle/CycleButtons";
import Cycles from "./cycle/Cycles";
import Inputs from "./inputs/Inputs";
import {
  setWeight,
  resetWeight,
  resetBarWeight,
  convertWeightToKg,
  convertWeightToLb,
  convertBarToKg,
  convertBarToLb
} from "../actions/weightActions";

class Lift extends Component {
  state = {
    weight: 0,
    barWeight: 0,
    isBarKilos: true,
    isKilos: true,
    rowA1: [1, 65, 5],
    rowA2: [2, 75, 5],
    rowA3: [3, 85, 5],
    rowB1: [1, 70, 3],
    rowB2: [2, 80, 3],
    rowB3: [3, 90, 3],
    rowC1: [1, 75, 5],
    rowC2: [2, 85, 3],
    rowC3: [3, 95, 1],
    rowD1: [1, 40, 5],
    rowD2: [2, 50, 5],
    rowD3: [3, 60, 5]
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });

    const { weight, barWeight } = this.state;
    const weights = {
      weight,
      barWeight
    };
    this.props.setWeight(weights);
  };

  resetWeight = e => {
    this.setState({ weight: 0 });
    this.props.resetWeight(this.state.weight);
    e.preventDefault();
  };

  resetBarWeight = e => {
    this.setState({ barWeight: 0 });
    this.props.resetBarWeight(this.state.barWeight);
    e.preventDefault();
  };

  convertWeightToKg = e => {
    e.preventDefault();
    const { weight } = this.state;
    let converted = (Math.round(weight * 0.45359237 * 2) / 2).toFixed(1);
    this.setState({
      weight: converted,
      isKilos: !this.state.isKilos
    });
    this.props.convertWeightToKg({ converted });
  };

  convertWeightToLb = e => {
    e.preventDefault();
    const { weight } = this.state;
    let converted = (Math.round((weight / 0.45359237) * 2) / 2).toFixed(1);
    this.setState({
      weight: converted,
      isKilos: !this.state.isKilos
    });
    this.props.convertWeightToLb({ converted });
  };

  convertBarToKg = e => {
    e.preventDefault();
    const { barWeight } = this.state;
    let converted = (Math.round(barWeight * 0.45359237 * 2) / 2).toFixed(1);
    this.setState({
      barWeight: converted,
      isBarKilos: !this.state.isBarKilos
    });
    this.props.convertBarToKg({ converted });
  };

  convertBarToLb = e => {
    e.preventDefault();
    const { barWeight } = this.state;
    let converted = (Math.round((barWeight / 0.45359237) * 2) / 2).toFixed(1);
    this.setState({
      barWeight: converted,
      isBarKilos: !this.state.isBarKilos
    });
    this.props.convertBarToLb({ converted });
  };

  render() {
    const { liftname } = this.props;
    const {
      weight,
      barWeight,
      isKilos,
      isBarKilos,
      rowA1,
      rowA2,
      rowA3,
      rowB1,
      rowB2,
      rowB3,
      rowC1,
      rowC2,
      rowC3,
      rowD1,
      rowD2,
      rowD3
    } = this.state;
    return (
      <Container className="body">
        <div className="liftHeader">{liftname}</div>
        <Inputs
          weight={weight}
          barWeight={barWeight}
          isKilos={isKilos}
          isBarKilos={isBarKilos}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          resetWeight={this.resetWeight}
          resetBarWeight={this.resetBarWeight}
          convertWeightToKg={this.convertWeightToKg}
          convertWeightToLb={this.convertWeightToLb}
          convertBarToKg={this.convertBarToKg}
          convertBarToLb={this.convertBarToLb}
        />
        <CycleButtons />
        <Cycles
          weight={weight}
          barWeight={barWeight}
          isKilos={isKilos}
          isBarKilos={isBarKilos}
          rowA1={rowA1}
          rowA2={rowA2}
          rowA3={rowA3}
          rowB1={rowB1}
          rowB2={rowB2}
          rowB3={rowB3}
          rowC1={rowC1}
          rowC2={rowC2}
          rowC3={rowC3}
          rowD1={rowD1}
          rowD2={rowD2}
          rowD3={rowD3}
        />
      </Container>
    );
  }
}

export default connect(
  null,
  {
    setWeight,
    resetWeight,
    resetBarWeight,
    convertWeightToKg,
    convertWeightToLb,
    convertBarToKg,
    convertBarToLb
  }
)(Lift);
