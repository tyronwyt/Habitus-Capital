import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"

import performanceStyles from "./performance.module.scss"

class Performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [],
            selectedFund: "Fund A",
            loaded: false,
        };

        this.setActive = this.setActive.bind(this);
    }

    componentDidMount() {
        this.fetchChartData();
    }

    fetchChartData() {
        const feedUrls = [
            'https://spreadsheets.google.com/feeds/list/1UAhYsgzm2Qy4iuOx1hJt8RgMtjP1jaGmUvCid-oISAE/od6/public/basic?alt=json',
            'https://spreadsheets.google.com/feeds/list/1NZM91sYM446Hry0H7stMnlalj4eCc-yAgDjF_TCMqrI/od6/public/basic?alt=json',
            'https://spreadsheets.google.com/feeds/list/1UAhYsgzm2Qy4iuOx1hJt8RgMtjP1jaGmUvCid-oISAE/od6/public/basic?alt=json'
        ]
        const selectedUrl = () => {
            switch(this.state.selectedFund) {
                case "Fund A":
                    return feedUrls[0];
                case "Fund B":
                    return feedUrls[1];
                case "Fund C":
                    return feedUrls[2];
                default:
                    return null
            }
        }
        console.log(selectedUrl());
        fetch(selectedUrl())
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
            let responseData = {
                labels: labels,
                datasets: [
                    {
                    label: "% Return on Capital m/m ",
                    data: dataset,
                    backgroundColor: "#307968",
                    }
                ]
            }
            this.setState({chartData: responseData, loaded: true});
        })
    }

    chartContent() {
        return (
            <HorizontalBar height={100}
                data={this.state.chartData}
                options={{
                    scales: {
                        xAxes: [{
                            gridLines: false,
                            ticks: {
                                beginAtZero: true
                        }
                    }]
                }}}
            />
        )
    }

    setActive(e) {
        const fundList = e.currentTarget.parentNode.childNodes;
        const selectedFund = e.currentTarget.innerHTML;

        console.log(selectedFund);
        fundList.forEach(element => {
            element.removeAttribute('data-active');
        });
        e.currentTarget.setAttribute('data-active', "true");
        this.setState(state => ({selectedFund: selectedFund}));
        this.setState({loaded: false});
        this.fetchChartData();
    }

    render() {
        return (
            <section className={performanceStyles.performance}>
                <div className="title-element">
                    <div id="performance"/>
                    <h2 className={performanceStyles.title}>Performance</h2>
                </div>
                <ul className={performanceStyles.tabList}>
                    <li onClick={(e) => {this.setActive(e)}} data-active="true">Fund A</li>
                    <li onClick={(e) => {this.setActive(e)}}>Fund B</li>
                    <li onClick={(e) => {this.setActive(e)}}>Fund C</li>
                </ul>
                <div className={performanceStyles.tabContainer}>
                    <h3>{this.state.selectedFund}</h3>
                    <div className={performanceStyles.chart}>
                        {this.state.loaded ? this.chartContent() : 'Loading'}
                    </div>
                </div>
            </section>
        )
    }
}

export default Performance