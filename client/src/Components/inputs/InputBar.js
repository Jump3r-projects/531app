import React, { Fragment, Component } from "react";
import { Label, Input, Col } from "reactstrap";

export default class InputBar extends Component {
  render() {
    const { onChange, barWeight } = this.props;

    return (
      <Fragment>
        <Label for="barWeight" sm={3}>
          Bar (B)
        </Label>
        <Col sm={4}>
          <Input
            type="number"
            name="barWeight"
            id="barWeight"
            onChange={onChange}
            value={barWeight}
          />
        </Col>
      </Fragment>
    );
  }
}
