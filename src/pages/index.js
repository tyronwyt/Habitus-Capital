import React from "react"

import Layout from "../components/layout"
import Legacy from "../components/legacy"
import Contact from "../components/contact"
import Investing from "../components/investing"


const IndexPage = () => (
    <Layout>
        <Legacy />
        <Investing />
        <Contact />
    </Layout>
)

export default IndexPage