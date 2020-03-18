/*** IMPORTS ***/
// Module imports
import React, { Component } from "react";
/*** [end of imports] ***/

export default class Permissions extends Component {
  state = {
    active: this.props.active || false
  }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state;

    return (
      <div className={active ? "toggle active" : "toggle"} onClick={() => this.toggle()}>
        <div className="toggle-btn" />
      </div>
    )
  }
}
