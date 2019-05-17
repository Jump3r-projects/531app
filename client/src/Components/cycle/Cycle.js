import React, { Component, Fragment } from "react";
import RowTemp from "../table/RowTemp";

class Cycle extends Component {
  render() {
    const { row1, row2, row3 } = this.props;

    return (
      <Fragment>
        <RowTemp row={row1} />
        <RowTemp row={row2} />
        <RowTemp row={row3} />
      </Fragment>
    );
  }
}

export default Cycle;
