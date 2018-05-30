/*** IMPORTS ***/
// Module imports
import React from "react"

// Page Elements
import Main from "./Main"
/*** [end of imports] ***/

const Page = props => (
  <div className={props.className ? `page ${props.className}` : "page"}>
    <Main>{props.children}</Main>
  </div>
)

export default Page
