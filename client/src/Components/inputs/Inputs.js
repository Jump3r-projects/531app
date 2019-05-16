import { Form, FormGroup } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ButtonGroup } from "reactstrap";
import {
  setWeight,
  resetWeight,
  resetBarWeight,
  convertToKg,
  convertToLb
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
    barWeight: 0
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

  convertToKg = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    if ((e.target.name = "weight")) {
      this.props.convertToKg(this.state.weight);
    }
    if ((e.target.name = "barWeight")) {
      this.props.convertToKg(this.state.barWeight);
    }
  };

  convertToLb = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { weight, barWeight } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <InputWeight name="weight" onChange={this.onChange} weight={weight} />
          <ResetWeightButton resetWeight={this.resetWeight} />
          <ConvertWeightButton
            convertToKg={this.convertToKg}
            convertToLb={this.convertToLb}
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
            convertToKg={this.convertToKg}
            convertToLb={this.convertToLb}
          />
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isKilos: state.weight.isKilos,
  isBarKilos: state.weight.isBarKilos,
  weight: state.weight.weight,
  barWeight: state.weight.barWeight
});

export default connect(
  mapStateToProps,
  { setWeight, resetWeight, resetBarWeight, convertToKg, convertToLb }
)(Inputs);
