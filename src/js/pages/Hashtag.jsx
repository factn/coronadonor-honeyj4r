/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import Cookies from "js-cookie"

// Components
import Page from "../components/Page"

// Utilities
import { gradientStyle } from "../resources/Util"
/*** [end of imports] ***/

export default class Hashtag extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    score: 4.12
  }

  render() {
    const { score } = this.state

    return (
      <Page className="hashtag-page" path={this.props.location.pathname}>
      
      </Page>
    )
  }
}
