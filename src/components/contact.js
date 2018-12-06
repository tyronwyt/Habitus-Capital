import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import EnquiryForm from "./enquiryForm"
import globalStyles from "./shared.module.scss"
import contactStyles from "./contact.module.scss"
import tree from "../assets/images/tree_960x350.jpg"


class Contact extends Component {
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
        if (this.state.modalOpen) {
            return (
                <EnquiryForm onModalClose={this.modalHandler}/>
            )
        } 
    }
    
    render() {
        return (
            <StaticQuery query = {graphql`
                query {
                    block_1: markdownRemark(fileAbsolutePath: {regex: "/contact_1/"}) {
                    html
                    }
                    contact: markdownRemark(fileAbsolutePath: {regex: "/contact_details.md/"}) {
                        frontmatter {
                        address
                        number
                        email
                        } 
                    }
                    block_2: markdownRemark(fileAbsolutePath: {regex: "/contact_2/"}) {
                        frontmatter {
                            social {
                                image
                                name
                                text
                                url
                            }
                        }
                    }
                }
            `
            } render = { data => (
                <section className={contactStyles.contact}>
                    <div className="title-element">
                        <div id="contact"/>
                        <h2 className={globalStyles.title}>Contact Us</h2>
                    </div>
                    <div className={globalStyles.row}>
                        <div className={`${globalStyles.block} ${globalStyles.black} ${globalStyles.left}`}
                        dangerouslySetInnerHTML={{__html: data.block_1.html}}>
                        </div>
                        <div className={globalStyles.block}
                            style={{background: "url(" + tree + ")", 
                            backgroundSize: "cover", 
                            backgroundPosition: "center", 
                            backgroundRepeat: "none" }}>
                        </div>
                    </div>
                    <div className={globalStyles.row}>
                        <div className={`${globalStyles.block} ${globalStyles.left}`} style={{ background: "#307968", color: "#fff" }}>
                            <h2>General Enquiries</h2>
                            <div className={contactStyles.button} onClick={this.onClickHandler}>Submit Enquiry</div>
                            <h2>Contact Details</h2>
                            <p>
                                <strong>Address:</strong> {data.contact.frontmatter.address}<br/>
                                <strong>Email:</strong> <a href={data.contact.frontmatter.email}>{data.contact.frontmatter.email}</a><br/>
                                <strong>Telephone:</strong> {data.contact.frontmatter.number}
                            </p>
                        </div>
                        <div className={`${globalStyles.block} ${globalStyles.right} ${contactStyles.social}`}>
                            <h3>Social Media</h3>
                            {data.block_2.frontmatter.social.map((item) => (
                                <div key={item.name}><a href={item.url}><img src={item.image} alt={item.name} align="left" />{item.text}</a></div>
                            ))}
                        </div>
                    </div>
                    {/* Inject the modal to load here */}
                    {this.showModal()}
                </section>
                )}
            />
        )
    }
}

export default Contact