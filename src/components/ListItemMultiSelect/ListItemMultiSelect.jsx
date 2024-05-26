import React, { Component } from "react";
import { List, Checkbox } from "antd";

import "./ListItemMultiSelect.css";
export default class ListItemMultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.character,
    };
  }
  render() {
    return (
      <>
        <List.Item className="list-item-multi-select">
          <div className="list-item-context">
            <div className="checkbox-part">
              <Checkbox checked={false} />
            </div>
            <div className="info-character">
              <div className="character-image-area">
                <img
                  className="character-image"
                  src="https://rickandmortyapi.com/api/character/avatar/16.jpeg"
                  alt="character_image"
                />
              </div>
              <div className="info-character-sub-titles">
                <div>Rick Sanchez</div>
                <div>51 Episodes</div>
              </div>
            </div>
          </div>
        </List.Item>
      </>
    );
  }
}
