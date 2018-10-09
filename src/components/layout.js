import React from "react"
import {Helmet} from "react-helmet";

import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Habitus Capital</title>
            </Helmet>
        <Header/>
        {children}
        <Footer/>
    </div>
)

export default Layout