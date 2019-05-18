import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setCycleA,
  setCycleB,
  setCycleC,
  setDeload,
  setWarmUp
} from "../../actions/setCycleActions";

class CycleButtons extends Component {
  static propTypes = {
    setCycleA: PropTypes.func,
    setCycleB: PropTypes.func,
    setCycleC: PropTypes.func,
    setDeload: PropTypes.func
  };

  render() {
    const {
      isCycleA,
      isCycleB,
      isCycleC,
      isDeload,
      setWarmUp,
      setCycleA,
      setCycleB,
      setCycleC,
      setDeload
    } = this.props;
    return (
      <div className="cycleArea">
        <div className="cycleButtonGroup">
          <ButtonGroup>
            <Button
              color="primary"
              size="sm"
              onClick={setCycleA}
              active={isCycleA === true}
            >
              Cycle A
            </Button>{" "}
            <Button
              color="primary"
              size="sm"
              onClick={setCycleB}
              active={isCycleB === true}
            >
              Cycle B
            </Button>{" "}
            <Button
              color="primary"
              size="sm"
              onClick={setCycleC}
              active={isCycleC === true}
            >
              Cycle C
            </Button>
            <Button
              color="warning"
              size="sm"
              onClick={setDeload}
              active={isDeload === true}
            >
              Deload
            </Button>{" "}
          </ButtonGroup>{" "}
        </div>
        <ButtonGroup>
          <Button color="success" size="sm" onClick={setWarmUp}>
            Warm up
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCycleA: state.setCycle.isCycleA,
  isCycleB: state.setCycle.isCycleB,
  isCycleC: state.setCycle.isCycleC,
  isDeload: state.setCycle.isDeload
});

export default connect(
  mapStateToProps,
  { setCycleA, setCycleB, setCycleC, setDeload, setWarmUp }
)(CycleButtons);
