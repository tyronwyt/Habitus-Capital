import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"

import performanceStyles from "./performance.module.scss"

class Performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            selectedFund: "Fund A"
        };

        this.setActive = this.setActive.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.chartData !== prevState.chartData) {
            this.setState({chartData: nextProps.chartData})
        }
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
                        <HorizontalBar height={100}
                            data={this.state.chartData}
                            options={{
                                scales: {
                                    xAxes: [{
                                        gridLines: false,
                                        ticks: {
                                            beginAtZero:true
                                    }
                                }]
                            }}}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Performance