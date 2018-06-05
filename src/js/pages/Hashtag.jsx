/*** IMPORTS ***/
// Module imports
import React, { Component, Fragment } from "react"
import Cookies from "js-cookie"
import { Line, Pie } from "react-chartjs-2"

// Components
import Page from "../components/Page"
import Loader from "../components/Loader"

// Utilities
import { gradientStyle } from "../resources/Util"

// Images
import logo from "../../img/logo.png"
import steeringWheel from "../../img/steering-wheel.png"
/*** [end of imports] ***/

const GLOBALS = {
  MAX_HON3Y: 5,
  orange: "#f39c12",
  orangeDark: "#e67d23",
  yellow: "#e9da0d"
}

export default class Hashtag extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    hashtag: this.props.match.params.hashtag || "driving",
    tab: this.props.match.params.tab || "Build Rep",
    score: 4.12,
    lineChartData: null,
    pieChartData: null
  }

  componentDidMount = () => {
    this.setState({
      lineChartData: {
        labels: [1, 5, 10, 15, 20, 25, 30], // this is the bit that will change
        datasets: [
          {
            label: "HON3Y",
            fill: false,
            lineTension: 0.5,
            backgroundColor: GLOBALS.orangeDark,
            borderColor: GLOBALS.orange,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: GLOBALS.orangeDark,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: GLOBALS.orangeDark,
            pointHoverBorderColor: "rgba(255, 255, 255, .5)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 3.5, 3, 3.12, 3.75, 3.8, 4.12] // this is the bit that will change
          }
        ]
      },
      pieChartData: {
        labels: ["Tesla", "Games", "Apps"],
        datasets: [
          {
            data: [65, 15, 25],
            backgroundColor: [GLOBALS.orangeDark, GLOBALS.orange, GLOBALS.yellow],
            hoverBackgroundColor: [GLOBALS.orangeDark, GLOBALS.orange, GLOBALS.yellow]
          }
        ]
      }
    })
  }

  changeTab = tab => {
    this.setState({
      tab
    })
  }

  render() {
    const { score, hashtag, tab, lineChartData, pieChartData } = this.state

    let buildRepContent = (
      <Fragment>
        <RepBuild icon={steeringWheel} description="Uplevel your driving skills: Test" />
        <RepBuild icon={steeringWheel} description="Disaster Preparedness: Driving Test" />
        <RepBuild icon={steeringWheel} description="Uplevel your driving skills: Test" />
      </Fragment>
    )

    let analyticsContent = (
      <div className="chart-wrapper" id="chartjs_hashtag_analytics">
        <div className="chart-wrap">
          <Line data={lineChartData} />
        </div>
        <div className="chart-wrap">
          <Pie data={pieChartData} />
        </div>
      </div>
    )

    let rankingContent = <div>Ranking</div>

    return (
      <Page className="hashtag-page" path={this.props.location.pathname} noHeader={true} backHeader={true}>
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
