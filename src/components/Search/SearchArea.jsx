import React, { Component } from "react";
import { Select } from "antd";
import "./SearchArea.css";

export default class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      searchInput: props.searchInput,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
      this.setState(nextProps);
    }
  }

  charactersOptionsModifier = (options) => {
    let optionsList = [];

    options.forEach((option) => {
      let newOption = {};

      newOption["label"] = option.name;
      newOption["value"] = option.name;
      optionsList.push(newOption);
    });

    return optionsList;
  };

  render() {
    return (
      <>
        <Select
          dropdownStyle={{visibility:"hidden"}}
          onSearch={(e)=>this.props.searchInputOnchange(e)}
          searchValue={this.props.searchInput}
          className="multiple-selection"
          mode="multiple"
          options={this.charactersOptionsModifier(this.state.options)}
        ></Select>
      </>
    );
  }
}
