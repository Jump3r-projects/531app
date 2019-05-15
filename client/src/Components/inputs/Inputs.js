import { Form, FormGroup } from "reactstrap";
import React, { Component } from "react";
import InputBar from "./InputBar";
import InputWeight from "./InputWeight";

export default class Inputs extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <InputWeight />
        </FormGroup>
        <FormGroup row>
          <InputBar />
        </FormGroup>
      </Form>
    );
  }
}
