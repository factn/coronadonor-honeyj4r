/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import Cookies from "js-cookie"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Styles
import "./style.sass"

// Pages
import Login from "./js/pages/Login"
import Hon3y from "./js/pages/Hon3y"
import Hashtag from "./js/pages/Hashtag"
import Profile from "./js/pages/Profile"
import SubProfile from "./js/pages/SubProfile"
import Permissions from "./js/pages/Permissions"
/*** [end of imports] ***/

class App extends Component {
  state = {
    userId: Cookies.get("userId") || 1, // added default user until login is complete
    loggedIn: false
  }

  componentDidMount = () => {
    if (this.state.userId) {
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            {/* Home */}
            <Route path="/" exact component={Hon3y} />

            {/* Reputation */}
            <Route path="/reputation/:user_id" exact component={Hon3y} />

            {/* Hashtags */}
            <Route path="/hon3y/:hashtag" exact component={Hashtag} />
            <Route path="/hon3y/:hashtag/:tab" exact component={Hashtag} />

            {/* Profile */}
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/:subprofile_name" exact component={SubProfile} />

            {/* Permissions */}
            <Route path="/permissions" exact component={Permissions} />
          </Switch>
        </BrowserRouter>
      )
    } else {
      return <Login />
    }
  }
}

export default App
