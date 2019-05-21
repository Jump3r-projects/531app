import React, { Component, Fragment } from "react";
import RowTemp from "../table/RowTemp";

class Cycle extends Component {
  render() {
    const {
      row1,
      row2,
      row3,
      weight,
      barWeight,
      isKilos,
      isBarKilos
    } = this.props;

    return (
      <Fragment>
        <RowTemp
          row={row1}
          weight={weight}
          barWeight={barWeight}
          isKilo={isKilos}
          isBarKilos={isBarKilos}
        />
        <RowTemp
          row={row2}
          weight={weight}
          barWeight={barWeight}
          isKilo={isKilos}
          isBarKilos={isBarKilos}
        />
        <RowTemp
          row={row3}
          weight={weight}
          barWeight={barWeight}
          isKilo={isKilos}
          isBarKilos={isBarKilos}
        />
      </Fragment>
    );
  }
}

export default Cycle;
