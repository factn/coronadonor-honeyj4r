/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { Link } from "react-router-dom"
/*** [end of imports] ***/

export default class Test extends Component {
  render() {
    return (
      <header>
        <Link to="/">Index</Link>
        <Link to="/test">Test</Link>
      </header>
    )
  }
}
