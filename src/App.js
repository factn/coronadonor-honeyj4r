/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Styles
import "./style.sass"

// Pages
import Index from "./js/pages/Index"
/*** [end of imports] ***/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Home */}
          <Route path="/" exact component={Index} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
