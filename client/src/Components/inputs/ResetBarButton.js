import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ResetBarButton extends Component {
  render() {
    const { resetBarWeight } = this.props;
    return (
      <Button
        name="barWeight"
        color="danger"
        size="sm"
        onClick={resetBarWeight}
      >
        Reset
      </Button>
    );
  }
}
