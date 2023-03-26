import React, { Component } from "react";
import Form from "./Form";
import TableQLSV from "./TableQLSV";

export default class FormQLSV extends Component {
  render() {
    return (
      <div className="container">
        <h3>Form Quan Ly Sinh Vien</h3>
        <Form />
        <TableQLSV />
      </div>
    );
  }
}
