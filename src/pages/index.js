import React, { Component } from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'



import "isomorphic-fetch"

import Layout from "../components/layout"
import Legacy from "../components/legacy"
import Contact from "../components/contact"
import Investing from "../components/investing"
import Performance from "../components/performance"
import Update from "../components/update"

library.add(faLock)

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