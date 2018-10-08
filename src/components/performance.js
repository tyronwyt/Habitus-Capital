import React from "react"
import { StaticQuery, graphql } from "gatsby"

import performanceStyles from "./performance.module.scss"

const Performance = () => (
    <StaticQuery
    query={graphql`
    query {
        allTestCsv {
          edges {
            node {
              letter
              value
            }
          }
        }
      }
  `
}
    render={data => (
        <section className={performanceStyles.performance}>
        <h2 className={performanceStyles.title} id="performance">Performance</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allTestCsv.edges.map(({ node }, index) => (
                                <tr key={index}>
                                    <td>{node.letter}</td>
                                    <td>{node.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </section>
    )}
    />

)

export default Performance