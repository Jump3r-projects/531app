import React, { Fragment, Component } from "react";
import { Label, Input, Col } from "reactstrap";

class InputWeight extends Component {
  render() {
    const { onChange, weight } = this.props;
    return (
      <Fragment>
        <Label for="weight" sm={3}>
          1 rep max
        </Label>
        <Col sm={4}>
          <Input
            type="number"
            name="weight"
            id="weight"
            onChange={onChange}
            value={weight}
          />
        </Col>
      </Fragment>
    );
  }
}

export default InputWeight;
