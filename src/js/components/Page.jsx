/*** IMPORTS ***/
// Module imports
import React from "react"

// Page Elements
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
/*** [end of imports] ***/

const Page = props => (
  <div className={props.className ? `page ${props.className}` : "page"}>
    {props.header ? <Header>{props.header}</Header> : <Header />}

    {props.subheader}
    
    <Main>{props.children}</Main>

    {props.footer && <Footer>{props.footer}</Footer>}
  </div>
)

export default Page
