import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

class ConvertBarButton extends Component {
  render() {
    const { convertBarToKg, convertBarToLb, isBarKilos } = this.props;
    return (
      <Fragment>
        {isBarKilos ? (
          <Button
            name="barWeight"
            color="info"
            size="sm"
            onClick={convertBarToLb}
          >
            {"kg "}
            {<FaExchangeAlt />}
            {" lb"}
          </Button>
        ) : (
          <Button
            name="barWeight"
            color="info"
            size="sm"
            onClick={convertBarToKg}
          >
            {"lb "}
            {<FaExchangeAlt />}
            {" kg"}
          </Button>
        )}
      </Fragment>
    );
  }
}

export default ConvertBarButton;
