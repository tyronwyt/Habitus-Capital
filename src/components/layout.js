import React from "react"
import {Helmet} from "react-helmet";

import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Habitus Capital</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            </Helmet>
        <Header/>
        {children}
        <Footer/>
        <form name="contact" method="POST" data-netlify="true" style={{display: "none"}}>
                <input type="hidden" name="form-name" value="contact" />
                    <h3>Request a prospectus</h3>
                    <p>
                        <input type="text" name="first_name" placeholder="First Name"/>
                    </p>
                    <p>
                        <input type="text" name="last_name" placeholder="Last Name"/>
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Email"/>
                    </p>
                    <p>Send me information on:</p>
                    <p>
                        <label><input type="checkbox" name="leveraged_futures_fund"/> Leveraged Futures Fund</label><br/>
                        <label><input type="checkbox" name="momentum_macro_fund"/> Momentum Macro Fund</label><br/>
                        <label><input type="checkbox" name="quantitative_automated_fund"/> Quantitative Automated Fund</label><br/>
                    </p>
                    <p>
                        <label><input type="checkbox" required name="accept_terms"/> I accept the terms and conditions</label>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
        </form>
        <form name="contact" method="POST" data-netlify="true" style={{display: "none"}}>
                <input type="hidden" name="form-name" value="contact" />
                    <h3>Enquiry</h3>
                    <p>
                        <input type="text" name="first_name" placeholder="First Name"/>
                    </p>
                    <p>
                        <input type="text" name="last_name" placeholder="Last Name"/>
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Email"/>
                    </p>
                    <p>
                        <textarea name="enquiry" placeholder="Enqury"/>
                    </p>
                    <p>
                        <label><input type="checkbox" required name="accept_terms"/> I accept the terms and conditions</label>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
        </form>
    </div>
)

export default Layout