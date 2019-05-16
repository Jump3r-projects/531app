import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ResetWeightButton extends Component {
  render() {
    const { resetWeight } = this.props;
    return (
      <Button name="weight" color="danger" size="sm" onClick={resetWeight}>
        Reset
      </Button>
    );
  }
}
