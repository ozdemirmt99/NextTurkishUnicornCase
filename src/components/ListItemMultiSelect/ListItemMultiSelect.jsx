import React, { Component } from "react";
import { List, Checkbox } from "antd";
import "./ListItemMultiSelect.css";
import { deepyCopy } from "../../common/Common";
import parse from 'html-react-parser';

export default class ListItemMultiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: props.character,
      searchInput: props.searchInput,
      isChecked: props.checked ? props.checked : false,
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }

  bolder = (searchInput, data) => {
    let currentCharacter = deepyCopy(data);
    let currentCharacterName = currentCharacter?.name;
    
    let result = currentCharacterName
      ? currentCharacterName.replace(searchInput, <b>searchInput</b>)
      : "undefined";

    return parse(result);
  };

  episodeWriter = (character) => {
    if (character != null) {
      let currentCharacter = deepyCopy(character);
      let episode = currentCharacter.episode.length;
      return episode > 1 ? `${episode} Episodes` : `${episode} Episode`; // change this;
    }
  };

  onChecked = (status) => {
    this.setState(
      {
        isChecked: status,
      },
      () => {this.props.checker(this.state.character.id, status)
        this.props.addOrRemoveCharacter(this.props.character)
      }
    );
  };

  render() {
    const { character, searchInput } = this.props;
    const name =
      character && searchInput
        ? this.bolder(searchInput, character)
        : character.name;

    return (
      <>
        <List.Item
          className="list-item-multi-select"
          key={this.props.character.id}
        >
          <div className="list-item-context">
            <div className="checkbox-part">
              <Checkbox
                checked={this.state.character.isChecked}
                onChange={(e) => this.onChecked(e.target.checked)}
              />
            </div>
            <div className="info-character">
              <div className="character-image-area">
                <img
                  className="character-image"
                  src={character?.image}
                  alt="character_image"
                />
              </div>
              <div className="info-character-sub-titles">
                <div>{name}</div>
                <div>{this.episodeWriter(character)}</div>
              </div>
            </div>
          </div>
        </List.Item>
      </>
    );
  }
}
