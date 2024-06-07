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

  render() {
    const { allCharacter } = this.props;
    return (
      <>
        <div className="outliner-main-character-list">
          <List className="main-character-list">
            {allCharacter.map((char, index) => {
              return (
                <ListItemMultiSelect
                  character={char}
                  key={index}
                  searchInput="s"
                />
              );
            })}
          </List>
        </div>
      </>
    );
  }
}
