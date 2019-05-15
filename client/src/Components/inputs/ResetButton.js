import React, { Component } from "react";
import { Button } from "reactstrap";

class ResetButton extends Component {
  render() {
    return (
      <Button color="danger" size="sm">
        Reset
      </Button>
    );
  }
}

export default ResetButton;
