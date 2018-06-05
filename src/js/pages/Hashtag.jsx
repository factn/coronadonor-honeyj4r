/*** IMPORTS ***/
// Module imports
import React, { Component, Fragment } from "react"
import Cookies from "js-cookie"

// Components
import Page from "../components/Page"
import Loader from "../components/Loader"

// Utilities
import { gradientStyle } from "../resources/Util"

// Images
import logo from "../../img/logo.png"
import steeringWheel from "../../img/steering-wheel.png"
/*** [end of imports] ***/

export default class Hashtag extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    hashtag: this.props.match.params.hashtag || "driving",
    tab: this.props.match.params.tab || "Build Rep",
    score: 4.12
  }

  changeTab = tab => {
    this.setState({
      tab
    })
  }

  render() {
    const { score, hashtag, tab } = this.state

    let buildRepContent = (
      <Fragment>
        <RepBuild icon={steeringWheel} description="Uplevel your driving skills: Test" />
        <RepBuild icon={steeringWheel} description="Disaster Preparedness: Driving Test" />
        <RepBuild icon={steeringWheel} description="Uplevel your driving skills: Test" />
      </Fragment>
    )

    let analyticsContent = (
      <Fragment>
        
      </Fragment>
    )

    let rankingContent = <div>Ranking</div>

    return (
      <Page className="hashtag-page" path={this.props.location.pathname}>
        <div className="hon3y-logo">
          <div className="hon3y-logo-background" />
          <div
            className="hon3y-score"
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

        <div className="subheader subheader-hashtag">
          <div className="subheader-line bold-line">#{hashtag.toUpperCase()}</div>
          <div className="subheader-line light-line">
            {new Date().toLocaleTimeString()} | {new Date().toDateString()}
          </div>
        </div>

        <section className="hashtag-details-area">
          <header className="tab-list-wrap">
            <ul className="tab-list">
              <Tab active={tab === "Build Rep"} tabName="Build Rep" changeTab={this.changeTab} />
              <Tab active={tab === "Analytics"} tabName="Analytics" changeTab={this.changeTab} />
              <Tab active={tab === "Ranking"} tabName="Ranking" changeTab={this.changeTab} />
            </ul>
          </header>

          <div className="tab-wrap hashtag-tab-wrap">
            <TabContent tabName={"Build Rep"} tab={tab}>
              {buildRepContent}
            </TabContent>
            <TabContent tabName={"Analytics"} tab={tab}>
              {analyticsContent}
            </TabContent>
            <TabContent tabName={"Ranking"} tab={tab}>
              {rankingContent}
            </TabContent>
          </div>
        </section>
      </Page>
    )
  }
}

const Tab = props => (
  <li className={props.active ? "tab-link active" : "tab-link"} onClick={() => props.changeTab(props.tabName)}>
    {props.tabName}
  </li>
)

const TabContent = props => (
  <article className={props.tab === props.tabName ? "tab active" : "tab"}>{props.children || <Loader />}</article>
)

const RepBuild = props => (
  <article className="reputation-build-task">
    <div className="task-icon-wrap">
      <img src={props.icon} className="task-icon" alt="Icon" />
    </div>
    <div className="task-description-wrap">
      <div className="task-description">{props.description}</div>
      <div className="task-hon3y">
        <img src={logo} alt="HON3Y" className="hon3y-icon" />
        <span className="total-hon3y"> 0.25 - 0.5 HON3Y</span>
      </div>
    </div>
  </article>
)
