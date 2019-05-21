import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";

class TotalWeight extends Component {
  render() {
    const {
      rowA1,
      rowA2,
      rowA3,
      rowB1,
      rowB2,
      rowB3,
      rowC1,
      rowC2,
      rowC3,
      rowD1,
      rowD2,
      rowD3,
      weight,
      isKilos,
      isBarKilos,
      warmUpToggle,
      isCycleA,
      isCycleB,
      isCycleC
    } = this.props;

    let warmUpTotal = warmUpToggle
      ? round(weight * (rowD1[1] / 100 + rowD2[1] / 100 + rowD3[1] / 100) * 5)
      : 0;
    let cycleATotal = isCycleA
      ? round(
          weight *
            ((rowA1[1] / 100) * rowA1[2] +
              (rowA2[1] / 100) * rowA2[2] +
              (rowA3[1] / 100) * rowA3[2])
        )
      : 0;
    let cycleBTotal = isCycleB
      ? round(
          weight *
            ((rowB1[1] / 100) * rowB1[2] +
              (rowB2[1] / 100) * rowB2[2] +
              (rowB3[1] / 100) * rowB3[2])
        )
      : 0;
    let cycleCTotal = isCycleC
      ? round(
          weight *
            ((rowC1[1] / 100) * rowC1[2] +
              (rowC2[1] / 100) * rowC2[2] +
              (rowC3[1] / 100) * rowC3[2])
        )
      : 0;

    let finalTotal = cycleATotal + cycleBTotal + cycleCTotal + warmUpTotal;

    return (
      <Row className="RowHeader">
        <Col className="no-pad">Total Weight</Col>
        <Col className="no-pad" />
        <Col className="no-pad" />
        {isKilos && isBarKilos && (
          <Col className="no-pad">{finalTotal.toFixed(1) + " kg"}</Col>
        )}
        {!isKilos && !isBarKilos && (
          <Col className="no-pad">{finalTotal.toFixed(1) + " Lb"}</Col>
        )}
        {isKilos !== isBarKilos ? <Col className="no-pad">0.0</Col> : null}
        <Col className="no-pad" />
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle,
  isCycleA: state.setCycle.isCycleA,
  isCycleB: state.setCycle.isCycleB,
  isCycleC: state.setCycle.isCycleC
});

export default connect(
  mapStateToProps,
  { round }
)(TotalWeight);
