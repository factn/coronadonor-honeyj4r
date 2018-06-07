/*** IMPORTS ***/
// Module imports
import React from "react"
import { Link } from "react-router-dom"
import Icon from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/fontawesome-free-solid"

// Images
import logo from "../../img/logo.png"
import logoInactive from "../../img/logo-inactive.png"
/*** [end of imports] ***/

const Header = props => (
  <header className={props.className ? `app-header ${props.className}` : "app-header"}>
    <Link to="/profile" className={props.path === "/profile" ? "profile-btn active" : "profile-btn"}>
      <Icon icon={faUser} />
    </Link>
    <Link to="/" className={props.path === "/" ? "hon3y-btn active" : "hon3y-btn"}>
      <img src={props.path === "/" ? logo : logoInactive} className="logo" alt="J4R" />
    </Link>
  </header>
)

export default Header
