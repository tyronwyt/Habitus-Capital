import React, { Component } from "react"

import "isomorphic-fetch"

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
            chartData:{}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    // Fetch request to Google Spreadsheet for performance data
    getChartData() {
        fetch('https://spreadsheets.google.com/feeds/list/1UAhYsgzm2Qy4iuOx1hJt8RgMtjP1jaGmUvCid-oISAE/od6/public/basic?alt=json')
        .then(response => {
            return response.json();
        }).then( response => {
            const data = response.feed.entry,
                labels = [],
                dataset = [];
            for (let i = 0; i < data.length; i++) {
                labels.push(data[i].title.$t);
                dataset.push(data[i].content.$t.replace('value: ', ''));
            }
            let chartData = {
                labels: labels,
                datasets: [
                    {
                    label: "% Return on Capital m/m ",
                    data: dataset,
                    backgroundColor: "#307968",
                    }
                ]
            }
            this.setState({chartData: chartData});
        })
    }

    render() {
        return(
            <Layout>
                <Legacy />
                <Investing />
                <Performance chartData={this.state.chartData} />
                <Update />
                <Contact />
            </Layout>
        )
    }
}

// const IndexPage = ({ data }) => (
    
// )

export default IndexPage