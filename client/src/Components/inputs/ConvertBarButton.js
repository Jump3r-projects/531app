import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

class ConvertBarButton extends Component {
  render() {
    const { convertToKg, convertToLb, isBarKilos } = this.props;
    return (
      <Fragment>
        {isBarKilos ? (
          <Button name="barWeight" color="info" size="sm" onClick={convertToLb}>
            {"kg "}
            {<FaExchangeAlt />}
            {" lb"}
          </Button>
        ) : (
          <Button name="barWeight" color="info" size="sm" onClick={convertToKg}>
            {"lb "}
            {<FaExchangeAlt />}
            {" kg"}
          </Button>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isBarKilos: state.weight.isBarKilos
});

export default connect(mapStateToProps)(ConvertBarButton);
