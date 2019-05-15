import React, { Fragment, Component } from "react";
import { Label, Input, Col, ButtonGroup } from "reactstrap";
import SubmitButton from "./SubmitButton";
import ConvertButton from "./ConvertButton";
import ResetButton from "./ResetButton";

export default class InputWeight extends Component {
  render() {
    return (
      <Fragment>
        <Label for="weight" sm={3}>
          1 rep max
        </Label>
        <Col sm={4}>
          <Input type="number" name="weight" />
        </Col>
        <ButtonGroup>
          <SubmitButton />
          <ConvertButton />
          <ResetButton />
        </ButtonGroup>
      </Fragment>
    );
  }
}
