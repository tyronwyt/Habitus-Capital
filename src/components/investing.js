import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import InvestorForm from "./investorForm"
import investingStyles from "./investing.module.scss"

class Investing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false, 
        }

        this.modalHandler = this.modalHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    modalHandler() {
        this.setState({modalOpen: false});
    }
    onClickHandler() {
        this.setState({modalOpen: true});
    }

    showModal() {
        
        // Prevent scrolling when modal is open
        // const body = document.getElementsByTagName('body');

        if (this.state.modalOpen) {
               
            return (
                <InvestorForm onModalClose={this.modalHandler}/>
            )
        } 
        // else {
        //     const body = document.getElementsByTagName('body');
        //     body[0].setAttribute('style', 'overflow: hidden');
        // }
    }

    render() {
        return (
            <StaticQuery query = {graphql `
            query {
                block_1: markdownRemark(fileAbsolutePath: {regex: "/investing_1/"}) {
                html
                }
                block_2: markdownRemark(fileAbsolutePath: {regex: "/investing_2/"}) {
                html
                }
                block_3: markdownRemark(fileAbsolutePath: {regex: "/investing_3/"}) {
                    html
                }
                block_4: markdownRemark(fileAbsolutePath: {regex: "/investing_4/"}) {
                    html
                }
            }
        `    
        }
    
        render = { data => (
            <section className={investingStyles.investing}>
                <div className="title-element">
                    <div id="investing"/>
                    <h2 className={investingStyles.title}>Investing</h2>
                </div>
                <div className={investingStyles.row}>
                    <div dangerouslySetInnerHTML={{__html: data.block_1.html}}></div>
                    <div dangerouslySetInnerHTML={{__html: data.block_2.html}}></div>
                    <div dangerouslySetInnerHTML={{__html: data.block_3.html}}></div>
                    <div style={{ background: "#307968" }}>
                        <div dangerouslySetInnerHTML={{__html: data.block_4.html}} style={{padding: 0, background: "none"}}></div>
                        <div className={investingStyles.button} onClick={this.onClickHandler}>Investor Relations</div>
                    </div>
                </div>
                {this.showModal()}
            </section>
            )}
        />
        )
    }
}

export default Investing