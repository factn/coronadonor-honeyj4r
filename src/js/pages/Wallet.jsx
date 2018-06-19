/*** IMPORTS ***/
// Module imports
import React, { Component } from "react"
import Cookies from "js-cookie"
import Icon from "@fortawesome/react-fontawesome"
import { faBalanceScale, faDollarSign, faChartLine } from "@fortawesome/fontawesome-free-solid"

// Components
import Page from "../components/Page"

// Utilities
import Database from "../resources/Database"
import { moneyfy } from "../resources/Util"
/*** [end of imports] ***/

export default class SubProfile extends Component {
  state = {
    userId: Cookies.get("userId") || 1,
    userData: null,
    tab: "payments"
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

  changeTab = tab => {
    this.setState({ tab })
  }

  render() {
    const { userData, tab } = this.state

    let payments = [
      {
        price: 300,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      },
      {
        price: 234,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      },
      {
        price: 12,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      },
      {
        price: 2,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      },
      {
        price: 45,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      },
      {
        price: 321,
        name: "W4GL! Audrey Reynolds",
        date: new Date()
      }
    ]

    return (
      <Page className="wallet-page" path={this.props.location.pathname}>
        <header className="wallet-header">
          <h3 className="j4r-title">J4R! wallet</h3>
          <h2 className="page-title wallet-page-title">$23,567.00</h2>
        </header>

        <section className="wallet-tabs-wrapper">
          <ul className="tab-links wallet-tab-links">
            <li
              className={
                tab === "balance" ? "wallet-tab-link tab-link active" : "wallet-tab-link tab-link"
              }
              onClick={() => this.changeTab("balance")}>
              <Icon icon={faBalanceScale} className="wallet-tab-icon" />
              <span className="wallet-tab-label">Balance</span>
            </li>
            <li
              className={
                tab === "payments" ? "wallet-tab-link tab-link active" : "wallet-tab-link tab-link"
              }
              onClick={() => this.changeTab("payments")}>
              <Icon icon={faDollarSign} className="wallet-tab-icon" />
              <span className="wallet-tab-label">Payments</span>
            </li>
            <li
              className={
                tab === "reports" ? "wallet-tab-link tab-link active" : "wallet-tab-link tab-link"
              }
              onClick={() => this.changeTab("reports")}>
              <Icon icon={faChartLine} className="wallet-tab-icon" />
              <span className="wallet-tab-label">Reports</span>
            </li>
          </ul>
        </section>

        <section className="wallet-tab-content-wrapper tab-content-wrapper">
          <article className={tab === "balance" ? "tab-content balance-tab active" : "tab-content balance-tab"} />
          <article className={tab === "payments" ? "tab-content payments-tab active" : "tab-content payments-tab"}>
            <ul className="payment-list">{payments.map((payment, _index) => <Payment {...payment} key={_index} />)}</ul>
          </article>
          <article className={tab === "reports" ? "tab-content reports-tab active" : "tab-content reports-tab"} />
        </section>
      </Page>
    )
  }
}

const Payment = props => (
  <li className="payment">
    <div className="transaction-price">{moneyfy(props.price, 2)}</div>
    <div className="transaction-name">{props.name}</div>
    <div className="transaction-date">{props.date.toDateString()}</div>
  </li>
)
