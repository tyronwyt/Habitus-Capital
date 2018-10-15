import React, { Component } from "react"
import { HorizontalBar } from "react-chartjs-2"

import performanceStyles from "./performance.module.scss"

class Performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.chartData !== prevState.chartData) {
            this.setState({chartData: nextProps.chartData})
        }
    }

    render() {
        return (
            <section className={performanceStyles.performance}>
                <div id="title-element">
                    <div id="performance"/>
                    <h2 className={performanceStyles.title}>Performance</h2>
                </div>
                <ul className={performanceStyles.tabList}>
                    <li className={performanceStyles.selected}>Fund A</li>
                    <li>Fund B</li>
                    <li>Fund C</li>
                </ul>
                <div className={performanceStyles.tabContainer}>
                    <div className={performanceStyles.chart}>
                        <HorizontalBar 
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