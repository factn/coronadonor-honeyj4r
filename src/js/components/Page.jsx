/*** IMPORTS ***/
// Module imports
import React from "react"

// Page Elements
import Header from "./Header"
import Main from "./Main"
/*** [end of imports] ***/

const Page = props => (
  <div className={props.className ? `page ${props.className}` : "page"}>
    {props.noHeader || <Header className={props.headerClass} />}

    <Main>{props.children}</Main>
  </div>
)

export default Page
