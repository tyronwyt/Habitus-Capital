import React, { Component } from "react"

import investorStyles from "./investorForm.module.scss"

class EnquiryForm extends Component {
    constructor(props) {
        super(props)

        this.modalHandler = this.modalHandler.bind(this);
    }

    modalHandler() {
        this.props.onModalClose();
    }

    componentDidMount() {
        // prevent scrolling when open
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = null;
    }

    render() {
        return (
            <div className={investorStyles.modal}>
            <div className={investorStyles.background } 
            onClick={this.modalHandler}
            ></div>
            <div className={investorStyles.formWrapper}>
                <form name="generalEnquiry" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="generalEnquiry" />
                    <h3>Submit an Enquiry</h3>
                    <p className={investorStyles.hidden}>
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
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
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                        <label><input type="checkbox" required name="accept_terms"/> I accept the terms and conditions</label>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        </div>
        )
    }
}

export default EnquiryForm

