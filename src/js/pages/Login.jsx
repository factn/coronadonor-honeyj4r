/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import Cookies from "js-cookie"

// Components
import Page from "../components/Page"
import Form from "../components/Form"
import Submit from "../components/inputs/Submit"
import SessionSetting from "../components/SessionSetting"
import SessionCard from "../components/SessionCard"

// Local JS Utilities
import Database from "../resources/Database"
/*** [end of imports] ***/

export default class Login extends Component {
  state = {
    buttonPressed: false
  }

  submitLogin = params => {
    if (!this.state.buttonPressed) {
      const json = {
        email: params.email,
        password: params.password
      }

      this.setState({
        buttonPressed: true
      })

      Database.attemptLogin(json)
        .then(result => {
          // console.log("Login complete:", result)

          this.setUserCookie(result)
        })
        .catch(error => {
          // console.error("Error getting user:", error)
        })
    }
  }
  setUserCookie = userId => {
    Cookies.set("userId", userId)
    this.props.history.push("/")
  }

  render() {
    let buttonObj = {
      labelPhrase: "Login",
      clas: "user-login-btn",
      onSubmit: this.submitLogin,
      onSubmitParams: {
        email: "username",
        password: "password"
      }
    }
    
    return (
      <Page className="login-page" noHeader={true}>
        <div className="subheader subheader-login">
          <div className="subheader-line bold-line">Your reputation wallet</div>
          <div className="subheader-line light-line">Owned by you | Controlled by you</div>
        </div>

        <Form>
          <SessionSetting className="login-settings">
            <SessionCard className="input-card email-card">
              <input type="text" placeholder="Username" id="username" />
            </SessionCard>

            <SessionCard className="input-card password-card">
              <input type="password" placeholder="Password" id="password" />
            </SessionCard>
          </SessionSetting>
        </Form>

        <Submit {...buttonObj} />
      </Page>
    )
  }
}
