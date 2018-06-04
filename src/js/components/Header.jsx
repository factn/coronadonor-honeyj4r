/*** IMPORTS ***/
// Module imports
import React from "react"
import { Link } from "react-router-dom"
import Icon from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/fontawesome-free-solid"
/*** [end of imports] ***/

const Header = props => (
  <header className={props.className ? `app-header ${props.className}` : "app-header"}>
    <Link to="/profile" className="btn profile-btn">
      <Icon icon={faUser} />
    </Link>
    <Link to="/" className="btn hon3y-btn">
      <img src="" className="logo" alt="J4R" />
    </Link>
  </header>
)

export default Header
