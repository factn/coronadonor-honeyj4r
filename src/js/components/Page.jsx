/*** IMPORTS ***/
// Module imports
import React from "react"

// Page Elements
import BackHeader from "./BackHeader"
import Header from "./Header"
import Main from "./Main"
/*** [end of imports] ***/

const Page = props => (
  <div className={props.className ? `page ${props.className}` : "page"}>
    {props.backHeader && <BackHeader goBack={props.backHeader}/>}

    {props.noHeader || <Header className={props.headerClass} path={props.path} />}

    <Main>{props.children}</Main>
  </div>
)

export default Page
