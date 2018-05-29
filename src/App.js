/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"

// Styles
import "./style.sass"

// Pages
import Index from "./js/pages/Index"
/*** [end of imports] ***/

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
