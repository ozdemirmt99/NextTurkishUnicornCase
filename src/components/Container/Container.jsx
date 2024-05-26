import React, { Component } from "react";
import "./Container.css";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.children);
    return (
      <>
        <div className="out-container">
          <div className="main-container">
            {this.props.children
            // .map((e, i) => {
            //   return (
            //     <div className="container-item" key={i}>
            //       {e}
            //     </div>
            //   );
            // })
            }
          </div>
        </div>
      </>
    );
  }
}
