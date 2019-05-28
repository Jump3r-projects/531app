import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Warmup from "../Warmup";
import { connect } from "react-redux";
import TableHeader from "../table/TableHeader";
import WarnMsg from "../table/WarnMsg";
import NoWarmUp from "../table/NoWarmUp";
import Cycle from "./Cycle";
import TotalWeight from "../table/TotalWeight";

class Cycles extends Component {
  render() {
    const {
      weight,
      barWeight,
      isCycleA,
      isCycleB,
      isCycleC,
      isDeload,
      isKilos,
      isBarKilos,
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
      rowD3
    } = this.props;

    return (
      <Container className="Table Cycle">
        <TableHeader />
        {!isDeload && <Warmup weight={weight} barWeight={barWeight} />}
        {isCycleA && (
          <Cycle
            row1={rowA1}
            row2={rowA2}
            row3={rowA3}
            weight={weight}
            barWeight={barWeight}
            isKilos={isKilos}
            isBarKilos={isBarKilos}
          />
        )}
        {isCycleB && (
          <Cycle
            row1={rowB1}
            row2={rowB2}
            row3={rowB3}
            weight={weight}
            barWeight={barWeight}
            isKilos={isKilos}
            isBarKilos={isBarKilos}
          />
        )}
        {isCycleC && (
          <Cycle
            row1={rowC1}
            row2={rowC2}
            row3={rowC3}
            weight={weight}
            barWeight={barWeight}
            isKilos={isKilos}
            isBarKilos={isBarKilos}
          />
        )}
        {isDeload && (
          <Fragment>
            <NoWarmUp />
            <Cycle
              row1={rowD1}
              row2={rowD2}
              row3={rowD3}
              weight={weight}
              barWeight={barWeight}
              isKilos={isKilos}
              isBarKilos={isBarKilos}
            />
          </Fragment>
        )}
        <TotalWeight
          isKilos={isKilos}
          isBarKilos={isBarKilos}
          rowA1={rowA1}
          rowA2={rowA2}
          rowA3={rowA3}
          rowB1={rowB1}
          rowB2={rowB2}
          rowB3={rowB3}
          rowC1={rowC1}
          rowC2={rowC2}
          rowC3={rowC3}
          rowD1={rowD1}
          rowD2={rowD2}
          rowD3={rowD3}
          weight={weight}
        />
        {isKilos !== isBarKilos ? <WarnMsg /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle,
  isCycleA: state.setCycle.isCycleA,
  isCycleB: state.setCycle.isCycleB,
  isCycleC: state.setCycle.isCycleC,
  isDeload: state.setCycle.isDeload
});

export default connect(mapStateToProps)(Cycles);
