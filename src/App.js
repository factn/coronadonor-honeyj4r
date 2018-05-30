/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Styles
import "./style.sass"

// Pages
import Index from "./js/pages/Index"
import Test from "./js/pages/Test"
/*** [end of imports] ***/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
