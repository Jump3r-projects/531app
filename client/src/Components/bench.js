import React, { Component } from "react";
import Cycles from "./cycle/Cycles";
import { Container } from "reactstrap";
import CycleButtons from "./cycle/CycleButtons";
import Inputs from "./inputs/Inputs";

class Bench extends Component {
  render() {
    return (
      <Container className="body">
        <div className="liftHeader">BENCH</div>
        <Inputs />
        <CycleButtons />
        <Cycles />
      </Container>
    );
  }
}

export default Bench;
