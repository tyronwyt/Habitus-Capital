import React from "react"

import contactStyles from "./contact.module.scss"
import mountains from "../assets/images/mountains_960x350.jpg"

const Contact = () => (
    <section className={contactStyles.contact}>
        <h2 className={contactStyles.title} id="contact">Contact Us</h2>
        <div className={contactStyles.row}>
            <div className={`${contactStyles.block} ${contactStyles.black} ${contactStyles.left}`}>
                <h3>Career Opportunities</h3>
                <p>
                    At Habitus Capital we believe every individual has unique talent which can be harnessed within the right environment. 
                    We add value to our team when an individual is a strong match within our cultural identity. All applications should be 
                    emailed to invest@habituscapital.com and should contain an answer to the following 3 questions:
                </p>
                <p>
                    What is your unique talent/s?<br/>
                    What are your strengths and weaknesses?<br/>
                    What unique habits do you practice?
                </p>
            </div>
            <div className={contactStyles.block} style={{background: "url(" + mountains + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "none" }}>
            </div>
        </div>
        <div className={contactStyles.row}>
            <div className={`${contactStyles.block} ${contactStyles.left}`} style={{ background: "#307968", color: "#fff" }}>
                <h3>Investor relations</h3>
                <p>
                     (Button Goes here)
                </p>
                <h3>Contact Details</h3>
                <p>
                    <strong>Address:</strong> Office 7, 35-37 Ludgate Hill, London, EC4M7JN <br/>
                    <strong>Email:</strong> invest@habituscapital.com <br/>
                    <strong>Telephone:</strong> N/A
                </p>
            </div>
            <div className={`${contactStyles.block} ${contactStyles.right}`}>
                <h3>Social Media</h3>
                <p>
                    @habituscapital<br/>
                    #HabitusInvesting
                </p>
                <p>
                    Habitus Capital
                </p>
                <p>
                    Habitus Capital
                </p>
            </div>
        </div>
    </section>
)

export default Contact