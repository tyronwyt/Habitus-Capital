import React, { Component } from "react"

import Layout from "../components/layout"
import Legacy from "../components/legacy"
import Contact from "../components/contact"
import Investing from "../components/investing"
import Performance from "../components/performance"
import Update from "../components/update"

class IndexPage extends Component {
    constructor() {
        super();
        this.state = {
            chartData: [],
        }
    }
    
    render() {
        return(
            <Layout>
                <Legacy />
                <Investing />
                <Performance/>
                <Update />
                <Contact />
            </Layout>
        )
    }
}

export default IndexPage