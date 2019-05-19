import { Form, FormGroup } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonGroup } from "reactstrap";
import {
  setWeight,
  resetWeight,
  resetBarWeight,
  convertWeightToKg,
  convertWeightToLb,
  convertBarToKg,
  convertBarToLb
} from "../../actions/weightActions";
import InputWeight from "./InputWeight";
import InputBar from "./InputBar";
import ResetWeightButton from "./ResetWeightButton";
import ResetBarButton from "./ResetBarButton";
import ConvertWeightButton from "./ConvertWeightButton";
import ConvertBarButton from "./ConvertBarButton";
import SubmitButton from "./SubmitButton";

class Inputs extends Component {
  state = {
    weight: 0,
    barWeight: 0,
    isKilos: true,
    isBarKilos: true
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
      isKilos: false
    });
    this.props.convertWeightToKg({ converted });
  };

  convertWeightToLb = e => {
    e.preventDefault();
    const { weight } = this.state;
    let converted = (Math.round((weight / 0.45359237) * 2) / 2).toFixed(1);
    this.setState({
      weight: converted,
      isKilos: true
    });
    this.props.convertWeightToLb({ converted });
  };

  convertBarToKg = e => {
    e.preventDefault();
    const { barWeight } = this.state;
    let converted = (Math.round(barWeight * 0.45359237 * 2) / 2).toFixed(1);
    this.setState({
      barWeight: converted,
      isBarKilos: true
    });
    this.props.convertBarToKg({ converted });
  };

  convertBarToLb = e => {
    e.preventDefault();
    const { barWeight } = this.state;
    let converted = (Math.round((barWeight / 0.45359237) * 2) / 2).toFixed(1);
    this.setState({
      barWeight: converted,
      isBarKilos: false
    });
    this.props.convertBarToLb({ converted });
  };

  render() {
    const { weight, barWeight } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <InputWeight name="weight" onChange={this.onChange} weight={weight} />
          <ResetWeightButton resetWeight={this.resetWeight} />
          <ConvertWeightButton
            convertWeightToKg={this.convertWeightToKg}
            convertWeightToLb={this.convertWeightToLb}
          />
          <ButtonGroup className="pad-left">
            <SubmitButton onSubmit={this.onSubmit} />
          </ButtonGroup>
        </FormGroup>
        <FormGroup row>
          <InputBar
            name="barWeight"
            onChange={this.onChange}
            barWeight={barWeight}
          />
          <ResetBarButton resetBarWeight={this.resetBarWeight} />
          <ConvertBarButton
            convertBarToKg={this.convertBarToKg}
            convertBarToLb={this.convertBarToLb}
          />
        </FormGroup>
      </Form>
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
)(Inputs);
