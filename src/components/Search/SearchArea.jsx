import React, { Component } from "react";
import { Select } from "antd";
import "./SearchArea.css";

export default class SearchArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      searchInput: props.searchInput,
      checkedSearch: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
    }
    this.setState(nextProps, () => {
      this.checkedCharactersAddToSearch();
    });
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

  uncheckedCharactersRemoveToSearch = (id) => {
    let values = this.state.checkedSearch.filter((e) => e.value !== id);

    this.setState({ checkedSearch: values.length > 0 ? values : null }, () => {
      this.props.RemoveCharacterOnChecked(values);
    });
  };

  checkedCharactersAddToSearch = () => {
    let values = [];

    this.props.checkedCharacters.map((e) =>
      values.push({ value: e.id, label: e.name })
    );

    this.setState({
      checkedSearch: values.length > 0 ? values : null,
    });
  };

  render() {
    return (
      <>
        <Select
          value={this.state.checkedSearch}
          dropdownStyle={{ visibility: "hidden" }}
          onSearch={(e) => this.props.searchInputOnchange(e)}
          searchValue={this.props.searchInput}
          className="multiple-selection"
          mode="multiple"
          onDeselect={this.uncheckedCharactersRemoveToSearch}
          // options={this.charactersOptionsModifier(this.state.options)}
        ></Select>
      </>
    );
  }
}
