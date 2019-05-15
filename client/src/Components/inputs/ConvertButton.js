import React, { Component } from "react";
import { Button } from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

class ConvertButton extends Component {
  render() {
    return (
      <Button color="info" size="sm">
        {"kg"}
        {<FaExchangeAlt />}
        {" kg"}
      </Button>
    );
  }
}

export default ConvertButton;
