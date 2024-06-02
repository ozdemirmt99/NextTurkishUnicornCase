import React, { Component } from "react";
import { List, Checkbox } from "antd";

import "./ListItemMultiSelect.css";
import { deepyCopy } from "../../commen/Commen";
export default class ListItemMultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.character,
      searchInput: props.searchInput,
    };
  }

  bolder = (searchInput, data) => {
    let currentCharacter = deepyCopy(data);
    let currentCharacterName = currentCharacter.name;

    return currentCharacterName.replace(
      /searchInput/g,
      `<b>${searchInput}</b>`
    );
  };

  episodeWriter = (character) => {
    if (character != null) {
      let currentCharacter = deepyCopy(character);
      let episode = currentCharacter.episode.length;
      return episode > 1 ? `${episode} Episodes` : `${episode} Episode`; // change this;
    }
  };

  render() {
    const { data, searchInput } = this.state;
    const name =
      data && searchInput ? this.bolder(data.name, searchInput) : undefined;

    return (
      <>
        <List.Item className="list-item-multi-select" key={this.props.id}>
          <div className="list-item-context">
            <div className="checkbox-part">
              <Checkbox checked={false} />
            </div>
            <div className="info-character">
              <div className="character-image-area">
                <img
                  className="character-image"
                  src={data?.image}
                  alt="character_image"
                />
              </div>
              <div className="info-character-sub-titles">
                <div>{name}</div>
                <div>{this.episodeWriter({ episode: [2] })}</div>
              </div>
            </div>
          </div>
        </List.Item>
      </>
    );
  }
}
