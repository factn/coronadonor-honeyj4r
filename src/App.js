/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Styles
import "./style.sass"

// Pages
import Index from "./js/pages/Index"
import Reputation from "./js/pages/Reputation"
/*** [end of imports] ***/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Home */}
          <Route path="/" exact component={Index} />

          {/* Reputation */}
          <Route path="/reputation" exact component={Reputation} />
          <Route path="/reputation/:user_id" exact component={Reputation} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
