import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"
import { graphql, StaticQuery } from "gatsby"
import 'chartjs-plugin-datalabels'

import globalStyles from "./shared.module.scss"
import performanceStyles from "./performance.module.scss"

class Performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFundKey: "0",
            selectedFund: "",
            loaded: false,
        };

        this.setActive = this.setActive.bind(this);
        this.fetchChartData();
    }

    chartData = [];
    feedUrls = [
        'https://spreadsheets.google.com/feeds/list/1UAhYsgzm2Qy4iuOx1hJt8RgMtjP1jaGmUvCid-oISAE/od6/public/basic?alt=json',
        'https://spreadsheets.google.com/feeds/list/1NZM91sYM446Hry0H7stMnlalj4eCc-yAgDjF_TCMqrI/od6/public/basic?alt=json',
        'https://spreadsheets.google.com/feeds/list/1969fIH-xw5DGl6HEexaX4orUyo4Q-fFVXaGggZJJBDA/od6/public/basic?alt=json'
    ]

    fetchChartData() {
        if (this.chartData[this.state.selectedFundKey] == null) {
            fetch(this.feedUrls[this.state.selectedFundKey])
            .then(response => {
                return response.json()
            })
            .then(response => {
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
                this.chartData[this.state.selectedFundKey] = responseData;
                this.setState({loaded: true});
            })
        } else { this.setState({loaded: true}); }      
    }

    chartContent() {
        return (
            <HorizontalBar height={100}
                data={this.chartData[this.state.selectedFundKey]}
                options={{
                    scales: {
                        xAxes: [{
                            gridLines: false,
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }, 
                    plugins: {
                        datalabels: {
                            color: 'black',
                            anchor: 'end',
                            align: 'right',
                            formatter: (value, context) => { return value + "%"}
                        }
                    } 
                }}
            />
        )
    }

    setActive(e) {
        this.setState({loaded: false});
        const fundList = e.currentTarget.parentNode.childNodes;
        const selectedFund = e.currentTarget.innerHTML;
        const selectedKey = e.currentTarget.dataset.key;
        this.setState({selectedFundKey: selectedKey});
        this.setState({selectedFund: selectedFund}, () => {this.fetchChartData();});
        fundList.forEach(element => {
            element.removeAttribute('data-active');
        });
        e.currentTarget.setAttribute('data-active', "true");
    }

    render() {
        return (
            <StaticQuery query = {graphql `
            query {
                funds: markdownRemark(fileAbsolutePath: {regex: "/performance/"}) {
                    frontmatter {
                        fund_1
                        fund_2
                        fund_3
                    }
                }
            }
        `    
        } render = {data => (
                <section className={performanceStyles.performance}>
                    <div className="title-element">
                        <div id="performance"/>
                        <h2 className={globalStyles.title}>Performance</h2>
                    </div>
                    <ul className={performanceStyles.tabList}>
                        <li onClick={(e) => {this.setActive(e)}} id="first_fund" data-active="true" data-key="0">{data.funds.frontmatter.fund_1}</li>
                        <li onClick={(e) => {this.setActive(e)}} data-key="1">{data.funds.frontmatter.fund_2}</li>
                        <li onClick={(e) => {this.setActive(e)}} data-key="2">{data.funds.frontmatter.fund_3}</li>
                    </ul>
                    <div className={performanceStyles.tabContainer}>
                        <h3>{this.state.selectedFund}</h3>
                        <div className={performanceStyles.chart}>
                            {this.state.loaded ? this.chartContent() : (<div className={performanceStyles.loader}>Loading...</div>)}
                        </div>
                    </div>
                </section>
            )}
        />
        )
    }
}

export default Performance