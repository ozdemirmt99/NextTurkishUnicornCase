import React, { Component } from "react";
import { Select } from "antd";
import "./SearchArea.css";

export default class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
  }

  render() {
    return (
      <>
        <Select
          className="multiple-selection"
          mode="multiple"
          options={this.state.options}
        ></Select>
      </>
    );
  }
}
