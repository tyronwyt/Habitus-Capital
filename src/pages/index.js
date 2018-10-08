import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Legacy from "../components/legacy"
import Contact from "../components/contact"
import Investing from "../components/investing"
import Performance from "../components/performance"
import Update from "../components/update"


const IndexPage = ({ data }) => (
    <Layout>
        <Legacy />
        <Investing />
        <Performance />
        <Update />
        <Contact />
    </Layout>
)

export default IndexPage