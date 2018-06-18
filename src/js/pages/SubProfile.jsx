/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

// Components
import Page from "../components/Page"

// Utilities
import Database from "../resources/Database"
import { unvaluify } from "../resources/Util"

// Images
import profile1 from "../../img/profile1.png"
/*** [end of imports] ***/

export default class SubProfile extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    userData: null,
    subprofileName: this.props.match.params.subprofile_name
  }

  componentDidMount = () => {
    Database.getUserById({ id: this.state.userId })
      .then(result => {
        // console.log("User successfully found:", result)
        this.setState({
          userData: result.body.data.attributes
        })
      })
      .catch(error => {
        // console.error("Error getting user:", error)
        this.setState({
          userData: null
        })
      })
  }

  render() {
    const { userData, subprofileName } = this.state

    const hashtags = [
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
      <Page
        className="sub-profile-page"
        path={this.props.location.pathname}
        noHeader={true}
        backHeader={this.props.history.goBack}>
        <section className="profile-section avatar-section">
          <header className="profile-header">
            <h4 className="profile-title">Sub Profile</h4>
          </header>
          <article className="profile-badge">
            <div
              className="profile-avatar"
              style={{
                backgroundImage: `url("${profile1}")`
              }}
            />
            <div className="profile-name">{unvaluify(subprofileName)}</div>
          </article>
        </section>
        <section className="profile-section">
          <ul className="hashtag-list">{hashtags.map((tag, _index) => <HashTag {...tag} key={_index} />)}</ul>
        </section>
      </Page>
    )
  }
}

const HashTag = props => (
  <li className="hashtag-item card">
    <Link
      className={`tag ${(props.score >= 4 && "high") ||
        (props.score >= 3 && props.score < 4 && "med") ||
        (props.score < 3 && "low")}-tag`}
      to={`/hon3y/${props.hashtag}`}>
      <span className="hashtag">#{props.hashtag}</span>
      <span className="score">{props.score}</span>
    </Link>
  </li>
)
