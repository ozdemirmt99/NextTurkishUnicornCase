import React, { Component } from "react";
import { List } from "antd";
import ListItemMultiSelect from "../ListItemMultiSelect/ListItemMultiSelect";
export default class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChrachters: props.allChrachters ? props.allChrachters : [1],
    };
  }

  render() {
    return (
      <>
        <List>
          {this.state.allChrachters.map(e=>{
            return <ListItemMultiSelect />
          })}
        </List>
      </>
    );
  }
}
