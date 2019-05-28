import React, { Component, Fragment } from "react";
import "../App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RowTemp from "./table/RowTemp";

class Warmup extends Component {
  state = {
    row1: ["A", 40, 5],
    row2: ["B", 50, 5],
    row3: ["C", 60, 5]
  };

  static propTypes = {
    warmUpToggle: PropTypes.bool
  };

  render() {
    const { row1, row2, row3 } = this.state;
    const { warmUpToggle, weight, barWeight, isKilos, isBarKilos } = this.props;

    return warmUpToggle ? (
      <Fragment>
        <RowTemp
          row={row1}
          weight={weight}
          barWeight={barWeight}
          isKilos={isKilos}
          isBarKilos={isBarKilos}
        />
        <RowTemp
          row={row2}
          weight={weight}
          barWeight={barWeight}
          isKilos={isKilos}
          isBarKilos={isBarKilos}
        />
        <RowTemp
          row={row3}
          weight={weight}
          barWeight={barWeight}
          isKilos={isKilos}
          isBarKilos={isBarKilos}
        />
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  warmUpToggle: state.setCycle.warmUpToggle
});

export default connect(mapStateToProps)(Warmup);
