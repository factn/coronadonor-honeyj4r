/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"

// Components
import Page from "../components/Page"
import Toggle from "../components/Toggle"
import Submit from "../components/inputs/Submit"

// Local JS Utilities
import { gradientStyle } from "../resources/Util"
// import Database from "../resources/Database"
/*** [end of imports] ***/

const GLOBALS = {
  MAX_HON3Y: 5,
  orange: "#f39c12"
}

export default class Permissions extends Component {
  state = {
    buttonPressed: false,
    score: 4.35
  }

  submitPermissions = params => {
    if (!this.state.buttonPressed) {
      // const json = {}

      this.setState({
        buttonPressed: true
      })

      // Database.providePermissions(json)
      //   .then(result => {
      //     // console.log("Permissions comlete:", result)

      //     // go to new URL
      //   })
      //   .catch(error => {
      //     // console.error("Error providing permissions:", error)
      //   })

      window.location.href = "https://w4gl-uat.herokuapp.com/"
    }
  }

  render() {
    const { score } = this.state

    let buttonObj = {
      labelPhrase: "Allow Access",
      clas: "submit-permissions-btn",
      onSubmit: this.submitPermissions,
      onSubmitParams: {
        
      }
    }

    const hashtags = [
      {
        hashtag: "HON3Y",
        score: 4.35
      },
      {
        hashtag: "generosity",
        score: 3.82
      },
      {
        hashtag: "driving",
        score: 4.12
      },
      {
        hashtag: "logistics",
        score: 4.82
      },
      {
        hashtag: "building",
        score: 1.52
      },
    ]
    
    return (
      <Page className="permissions-page">
        <section className="subheader subheader-permissions">
          <div className="hon3y-logo">
            <div className="hon3y-logo-background" />
            <div
              className="hon3y-score"
              style={gradientStyle({
                direction: "top",
                divisor: GLOBALS.MAX_HON3Y,
                dividend: score,
                startColor: GLOBALS.orange,
                endColor: "transparent"
              })}>
              {score}
            </div>
          </div>
          <div className="subheader-line bold-line">Your overall HON3Y</div>
        </section>

        <section className="access-toggles">
          <header className="access-header">
            <div className="bold-line">What would you like to give W4GL access to?</div>
            <div className="light-line">W4GL! would be able to view HON3Y and add to it.</div>
          </header>

          <ul className="toggle-list">
            {hashtags.map((tag, _index) => <ToggleItem {...tag} key={_index}/>)}
          </ul>
        </section>

        <section className="anonymize-section">
          <header className="anonymize-header">
            <div className="bold-line">Would you like to anonymize your profile?</div>
            <div className="light-line">If you do this W4GL! will have access your hon3y, but no identifying information.</div>
          </header>

          <div className="anonymize-toggle">
            <Toggle />
            <div className="anonymize-label">Yes, anonymize me!</div>
          </div>
        </section>

        <Submit {...buttonObj} />
      </Page>
    )
  }
}

const ToggleItem = props => (
  <li className="toggle-item">
    <Toggle />
    <div className="toggle-label">
      <span className="label-hashtag">#{props.hashtag.toUpperCase()}</span>
      <span className="label-score">{props.score}</span>
    </div>
  </li>
)
