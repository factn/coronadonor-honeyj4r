/*** IMPORTS ***/
// Module imports
import React from "react"
import { Link } from "react-router-dom"
import Icon from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/fontawesome-free-solid"

// Page Elements
import Header from "./Header"
import Main from "./Main"
/*** [end of imports] ***/

const Page = props => (
  <div className={props.className ? `page ${props.className}` : "page"}>
    {props.backHeader && (
      <header className="app-header">
        <Link to="/" className="back-btn active">
          <Icon icon={faAngleLeft} />
          <span> Back</span>
        </Link>
      </header>
    )}

    {props.noHeader || <Header className={props.headerClass} path={props.path} />}

    <Main>{props.children}</Main>
  </div>
)

export default Page
