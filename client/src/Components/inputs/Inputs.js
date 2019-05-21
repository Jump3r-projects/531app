import { Form, FormGroup } from "reactstrap";
import React, { Component } from "react";
import { ButtonGroup } from "reactstrap";
import InputWeight from "./InputWeight";
import InputBar from "./InputBar";
import ResetWeightButton from "./ResetWeightButton";
import ResetBarButton from "./ResetBarButton";
import ConvertWeightButton from "./ConvertWeightButton";
import ConvertBarButton from "./ConvertBarButton";
import SubmitButton from "./SubmitButton";

class Inputs extends Component {
  render() {
    const {
      weight,
      barWeight,
      isKilos,
      isBarKilos,
      onChange,
      onSubmit,
      resetWeight,
      resetBarWeight,
      convertWeightToKg,
      convertWeightToLb,
      convertBarToKg,
      convertBarToLb
    } = this.props;
    return (
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <InputWeight name="weight" onChange={onChange} weight={weight} />
          <ResetWeightButton resetWeight={resetWeight} />
          <ConvertWeightButton
            isKilos={isKilos}
            convertWeightToKg={convertWeightToKg}
            convertWeightToLb={convertWeightToLb}
          />
          <ButtonGroup className="pad-left">
            <SubmitButton onSubmit={onSubmit} />
          </ButtonGroup>
        </FormGroup>
        <FormGroup row>
          <InputBar
            name="barWeight"
            onChange={onChange}
            barWeight={barWeight}
          />
          <ResetBarButton resetBarWeight={resetBarWeight} />
          <ConvertBarButton
            isBarKilos={isBarKilos}
            convertBarToKg={convertBarToKg}
            convertBarToLb={convertBarToLb}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default Inputs;
