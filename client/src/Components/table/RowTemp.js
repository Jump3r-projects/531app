import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import RowDyn from "./RowDyn";
import BlankRow from "./BlankRow";

class RowTemp extends Component {
  render() {
    const { weight, barWeight, row, isKilos, isBarKilos } = this.props;
    return (
      <Fragment>
        <Row className="row">
          {row.map((e, i) => (
            <Col key={i} className="no-pad">
              {e}
            </Col>
          ))}
          {isKilos === isBarKilos ? (
            <RowDyn row={row} weight={weight} barWeight={barWeight} />
          ) : (
            <BlankRow />
          )}
        </Row>
      </Fragment>
    );
  }
}

export default RowTemp;
