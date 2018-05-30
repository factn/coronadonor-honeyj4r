/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import Cookies from "js-cookie"

// Components
import Page from "../components/Page"
import Form from "../components/Form"
import SessionCard from "../components/SessionCard"

// Utilities
import { gradientStyle } from "../resources/Util"
/*** [end of imports] ***/

export default class Reputation extends Component {
  state = {
    userId: this.props.match.params.user_id || Cookies.get("userId") || 1,
    score: 4.35
  }

  render() {
    const { score } = this.state

    const searchList = [
      {
        hashtag: "driving",
        score: 4.12
      },
      {
        hashtag: "generosity",
        score: 3.82
      },
      {
        hashtag: "friendship",
        score: 4.52
      },
      {
        hashtag: "languages",
        score: 3.92
      }
    ]

    return (
      <Page className="reputation-page">
        <div className="reputation-logo">
          <div className="reputation-logo-background" />
          <div
            className="reputation-score"
            style={gradientStyle({
              direction: "top",
              divisor: 5,
              dividend: score,
              startColor: "#f39c12",
              endColor: "transparent"
            })}>
            {score}
          </div>
        </div>

        <div className="subheader subheader-reputation">
          <div className="subheader-line bold-line">Your overall reputation</div>
          <div className="subheader-line light-line">
            {new Date().toLocaleTimeString()} | {new Date().toDateString()}
          </div>
        </div>

        <Form>
          <h4 className="form-title">View aspects of your reputation</h4>
          <SessionCard className="input-card email-card">
            <input type="text" placeholder="Use a #hashtag to search your rep" id="reputation_search" />
          </SessionCard>
        </Form>

        <div className="reputation-search-results">
          <h5 className="search-result-title">You have a high rep for:</h5>
          <ul className="search-result-list">
            {searchList.map((result, _index) => <SearchResultItem {...result} key={_index} />)}
          </ul>
        </div>
      </Page>
    )
  }
}

const SearchResultItem = props => (
  <li className="search-result-item">
    <div
      className={
        (props.score >= 4 && "result high-result") ||
        (props.score >= 3 && props.score < 4 && "result med-result") ||
        (props.score < 3 && "result low-result")
      }>
      <span className="hashtag">#{props.hashtag}</span>
      <span className="score">{props.score}</span>
    </div>
  </li>
)
