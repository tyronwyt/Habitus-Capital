import React from "react"

import investingStyles from "./investing.module.scss"

const Investing = () => (
    <section className={investingStyles.investing}>
        <h2 className={investingStyles.title}>Investing</h2>
        <div className={investingStyles.row}>
            <div>
                <h3>Our Edges</h3>
                <ul>
                <li>Our culture and environment</li>
                <li>Our habits, processes and routines</li>
                <li>Our automated function of evolving through failures</li>
                <li>Our revolutionary risk management tools</li>
                <li>Our constant search for efficiencies</li>
                <li>Our process of extracting consistent marginal gains</li>
                </ul>
            </div>
            <div>
                <h3>Strategic Overview</h3>
                <p>Habitus Capital has three diverse funds</p>
                <ol>
                    <li>Discretionary day trading with automated signalling of defined strategies</li>
                    <li>Fully-automated algorithmic strategies</li>
                    <li>Discretionary Swing Trading</li>
                </ol>
                <p>Allocation of capital is proportionately balanced between the three funds</p>
            </div>
            <div>
                <h3>Management Fees</h3>
                <p>
                    With a focus on the future of investing, we don’t believe investors should be subject 
                    to administration fees. By that token we believe in meriting high performance. 
                    For this reason, we only charge a fixed percentage, performance fee on profits generated
                </p>
            </div>
            <div style={{ background: "#307968" }}>
                <h3>Raising capital</h3>
                <p>
                    Habitus Capital periodically invites our database of investors to review prospective investment opportunities. 
                    Should you wish to receive a prospectus, please submit your details below
                </p>
            </div>
        </div>
    </section>
)

export default Investing