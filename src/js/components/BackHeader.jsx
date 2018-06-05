/*** IMPORTS ***/
// Module imports
import React from "react"
import Icon from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/fontawesome-free-solid"
/*** [end of imports] ***/

const Header = props => (
  <header className="app-header">
    <buton className="back-btn active" onClick={() => props.goBack()}>
      <Icon icon={faAngleLeft} />
      <span> Back</span>
    </buton>
  </header>
)

export default Header
