import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"
import { graphql, StaticQuery } from "gatsby"
import fetch from "isomorphic-fetch"
import 'chartjs-plugin-datalabels'


import globalStyles from "./shared.module.scss"
import performanceStyles from "./performance.module.scss"

class Performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFundKey: "1",
            selectedFund: "",
            selectedYear: '2020',
            loaded: false,
        };

        this.setActive = this.setActive.bind(this);
        this.fetchChartData();
    }

    chartData = {2018: [], 2019: [], 2020: []};
    feedUrls = { 
        'googleSheet'   : "https://spreadsheets.google.com/feeds/list/",
        2018            : '1weIgvn69BkApE5ZvGn5BuD8Uc2G0hIjju-Z7o0YX2WY/',
        2019            : '1a-HOvPrK9M8MTz5TWHVZCquBRLgZNQztu-EIp4rJBFs/',
        2020            : '1RwnT8a3T-jWtzdMS4l1YO9vV1zHAVp54qgHvGR9XMpY/',
        'append'        : '/public/basic?alt=json'
        }

    fetchChartData() {
        if (this.chartData[this.state.selectedYear][this.state.selectedFundKey] == null) {
            let url = this.feedUrls.googleSheet + this.feedUrls[this.state.selectedYear] + this.state.selectedFundKey + this.feedUrls.append;
            fetch(url)
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
                this.chartData[this.state.selectedYear][this.state.selectedFundKey] = responseData;
                this.setState({loaded: true});
            })
        } else { this.setState({loaded: true}); }      
    }

    chartContent() {
        return (
            <HorizontalBar height={100}
                data={this.chartData[this.state.selectedYear][this.state.selectedFundKey]}
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

    setYear(e) {
        this.setState({loaded: false});
        const yearList = e.currentTarget.parentNode.childNodes;
        const selectedYear = e.currentTarget.innerHTML;
        this.setState({selectedYear: selectedYear}, () => {this.fetchChartData();});
        yearList.forEach(element => {
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
                    <ul className={performanceStyles.tabYear}>
                        <li data-active="true" onClick={(e) => {this.setYear(e)}}>2020</li>
                        <li onClick={(e) => {this.setYear(e)}}>2019</li>
                        <li onClick={(e) => {this.setYear(e)}}>2018</li>
                    </ul>
                    <ul className={performanceStyles.tabList}>
                        <li onClick={(e) => {this.setActive(e)}} id="first_fund" data-active="true" data-key="1">{data.funds.frontmatter.fund_1}</li>
                        <li onClick={(e) => {this.setActive(e)}} data-key="2">{data.funds.frontmatter.fund_2}</li>
                        <li onClick={(e) => {this.setActive(e)}} data-key="3">{data.funds.frontmatter.fund_3}</li>
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