import React, { Component } from "react";
import { List } from "antd";
import "./CharactersList.css";
import ListItemMultiSelect from "../ListItemMultiSelect/ListItemMultiSelect";
export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacter: props.allCharacter
        ? props.allCharacter
        : [1, 2, 3, 4, 5, 6, 7, 8, 9],
      searchInput: props.searchInput,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
    }
    this.setState(nextProps);
  }

  checker = (id, checkbox) => {
    const { allCharacter } = this.state;
    let newAllCharacter = [];

    allCharacter.forEach((e) => {
      if (e.id === id) {
        e["isChecked"] = checkbox;
      }

      newAllCharacter.push(e);
    });

    this.setState({ allCharacter: newAllCharacter }, () => {
      this.props.controlSelectedCharacters(this.state.allCharacter);
    });
  };

  

  render() {
    const { allCharacter } = this.props;
    return (
      <>
        <div className="outliner-main-character-list">
          <List className="main-character-list">
            {allCharacter.map((char, index) => {
              return (
                <ListItemMultiSelect
                  addOrRemoveCharacter={this.props.addOrRemoveCharacter}
                  character={char}
                  key={index}
                  searchInput={this.props.searchInput}
                  checker={this.checker}
                />
              );
            })}
          </List>
        </div>
      </>
    );
  }
}
