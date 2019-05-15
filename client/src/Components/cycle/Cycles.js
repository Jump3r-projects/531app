import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Warmup from "../Warmup";
import { connect } from "react-redux";
import TableHeader from "../table/TableHeader";
import WarnMsg from "../table/WarnMsg";
import NoWarmUp from "../table/NoWarmUp";
import Cycle from "./Cycle";

class Cycles extends Component {
  state = {
    rowA1: [1, 65, 5],
    rowA2: [2, 75, 5],
    rowA3: [3, 85, "5+"],
    rowB1: [1, 70, 3],
    rowB2: [2, 80, 3],
    rowB3: [3, 90, "3+"],
    rowC1: [1, 75, 5],
    rowC2: [2, 85, 3],
    rowC3: [3, 95, "1+"],
    rowD1: [1, 40, 5],
    rowD2: [2, 50, 5],
    rowD3: [3, 60, 5]
  };

  render() {
    const {
      isCycleA,
      isCycleB,
      isCycleC,
      isDeload,
      isKilos,
      isBarKilos
    } = this.props;
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
      rowD3
    } = this.state;

    return (
      <Container className="Table Cycle">
        <TableHeader />
        {!isDeload && <Warmup />}
        {isCycleA && <Cycle row1={rowA1} row2={rowA2} row3={rowA3} />}
        {isCycleB && <Cycle row1={rowB1} row2={rowB2} row3={rowB3} />}
        {isCycleC && <Cycle row1={rowC1} row2={rowC2} row3={rowC3} />}
        {isDeload && (
          <Fragment>
            <NoWarmUp />
            <Cycle row1={rowD1} row2={rowD2} row3={rowD3} />{" "}
          </Fragment>
        )}
        {isKilos !== isBarKilos ? <WarnMsg /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle,
  isKilos: state.weight.isKilos,
  isBarKilos: state.weight.isBarKilos,
  isCycleA: state.setCycle.isCycleA,
  isCycleB: state.setCycle.isCycleB,
  isCycleC: state.setCycle.isCycleC,
  isDeload: state.setCycle.isDeload
});

export default connect(mapStateToProps)(Cycles);
