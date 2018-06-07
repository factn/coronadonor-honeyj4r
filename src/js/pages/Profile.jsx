/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import Icon from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid"

// Components
import Page from "../components/Page"
import Loader from "../components/Loader"

// Utilities
import Database from "../resources/Database"
import { valuify } from "../resources/Util"
/*** [end of imports] ***/

export default class Profile extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    userData: null
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
    const { userData } = this.state

    let subProfiles = [
      {
        name: "Juniper Work"
      },
      {
        name: "Cool Juniper"
      },
      {
        name: "Juniper Family"
      }
    ]

    return (
      <Page className="profile-page" path={this.props.location.pathname}>
        <section className="profile-section avatar-section">
          <header className="profile-header">
            <h4 className="profile-title">Main Profile</h4>
          </header>
          <article className="profile-badge">
            <div className="profile-avatar" />
            <div className="profile-name">Juniper Reynolds</div>
          </article>
        </section>
        <section className="profile-section">
          <header className="profile-header">
            <h4 className="profile-title">Sub Profiles</h4>
          </header>
          <div className="sub-profile-list">
            {subProfiles ? (
              subProfiles.map((subProfile, _index) => <SubProfile name={subProfile.name} key={_index} />)
            ) : (
              <Loader />
            )}
            <div className="new-sub-profile-btn">
              <Icon icon={faPlusCircle} className="icon" />
              <span className="label"> Add a sub profile</span>
            </div>
          </div>
        </section>
      </Page>
    )
  }
}

const SubProfile = props => (
  <Link className="sub-profile-link" to={`/profile/${valuify(props.name)}`}>
    <article className="sub-profile card">
      <div
        className="sub-profile-avatar"
        style={{
          backgroundImage: `url("${props.avatar}")`
        }}
      />
      <div className="sub-profile-name">{props.name}</div>
    </article>
  </Link>
)
