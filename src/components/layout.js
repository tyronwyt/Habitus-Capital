import React from "react"

const Layout = ({children}) => (
    <div>
        <header><h1>Header</h1></header>
        {children}
        <footer><h2>Footer</h2></footer>
    </div>
)

export default Layout