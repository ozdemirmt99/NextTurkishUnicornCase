import React, { Component } from "react";
import { List } from "antd";
import "./CharactersList.css"
import ListItemMultiSelect from "../ListItemMultiSelect/ListItemMultiSelect";
export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChrachters: props.allChrachters ? props.allChrachters : [1,2,3,4,5,6,7,8,9],
    };
  }

  render() {
    return (
      <>
      <div className="outliner-main-character-list">
      <List className="main-character-list">
          {this.state.allChrachters.map(e=>{
            return <ListItemMultiSelect main={e} id={e} />
          })}
        </List>
      </div>
      </>
    );
  }
}
