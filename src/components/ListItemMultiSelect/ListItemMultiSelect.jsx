import React, { Component } from "react";
import { List, Checkbox } from "antd";
import "./ListItemMultiSelect.css";
import { deepyCopy } from "../../common/Common";

export default class ListItemMultiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: props.character,
      searchInput: props.searchInput,
    };
  }
  

  bolder = (searchInput, data) => {
    let currentCharacter = deepyCopy(data);
    let currentCharacterName = currentCharacter?.name;
    debugger
    return currentCharacterName? currentCharacterName.replace(
      /searchInput/g,
      `<b>${searchInput}</b>`
    ): ""
  };

  episodeWriter = (character) => {
    if (character != null) {
      let currentCharacter = deepyCopy(character);
      let episode = currentCharacter.episode.length;
      return episode > 1 ? `${episode} Episodes` : `${episode} Episode`; // change this;
    }
  };

  render() {
    const { character, searchInput } = this.state;
    const name =
    character && searchInput ? this.bolder(character.name, searchInput) : character.name;

    return (
      <>
        <List.Item className="list-item-multi-select" key={this.props.character.id}>
          <div className="list-item-context">
            
            <div className="checkbox-part">
              <Checkbox checked={false} />
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
                <div>{this.bolder(searchInput,character)}</div>
                <div>{this.episodeWriter(character)}</div>
              </div>
            </div>
          </div>
        </List.Item>
      </>
    );
  }
}
