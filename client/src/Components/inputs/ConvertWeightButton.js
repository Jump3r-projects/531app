import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { FaExchangeAlt } from "react-icons/fa";

class ConvertWeightButton extends Component {
  render() {
    const { convertWeightToKg, convertWeightToLb, isKilos } = this.props;
    return (
      <Fragment>
        {isKilos ? (
          <Button
            name="weight"
            color="info"
            size="sm"
            onClick={convertWeightToLb}
          >
            {"kg "}
            {<FaExchangeAlt />}
            {" lb"}
          </Button>
        ) : (
          <Button
            name="weight"
            color="info"
            size="sm"
            onClick={convertWeightToKg}
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

const mapStateToProps = state => ({
  isKilos: state.weight.isKilos
});

export default connect(mapStateToProps)(ConvertWeightButton);
