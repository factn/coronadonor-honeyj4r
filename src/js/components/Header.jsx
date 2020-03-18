/*** IMPORTS ***/
// Module imports
import React from "react"
import { Link } from "react-router-dom"
import Icon from "@fortawesome/react-fontawesome"
import { faUser, faWallet } from "@fortawesome/fontawesome-free-solid"

// Images
import logo from "../../img/logo.png"
import logoInactive from "../../img/logo-inactive.png"
/*** [end of imports] ***/

const Header = props => (
  <header className={props.className ? `app-header ${props.className}` : "app-header"}>
    <Link to="/profile" className={props.path === "/profile" ? "header-btn profile-btn active" : "header-btn profile-btn"}>
      <Icon icon={faUser} />
    </Link>
    <Link to="/" className={props.path === "/" ? "header-btn hon3y-btn active" : "header-btn hon3y-btn"}>
      <img src={props.path === "/" ? logo : logoInactive} className="logo" alt="J4R" />
    </Link>
    <Link to="/wallet" className={props.path === "/wallet" ? "header-btn wallet-btn active" : "header-btn wallet-btn"}>
      <Icon icon={faWallet} />
    </Link>
  </header>
)

export default Header
