import React from "react"
import {Helmet} from "react-helmet";

import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Habitus Capital</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            </Helmet>
        <Header/>
        {children}
        <Footer/>
    </div>
)

export default Layout