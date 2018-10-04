import React from "react"

import Navbar from "./header"

const Layout = ({children}) => (
    <div>
        <Navbar/>
        {children}
        <footer><h2>Footer</h2></footer>
    </div>
)

export default Layout