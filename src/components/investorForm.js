import React, { Component } from "react"

import investorStyles from "./investorForm.module.scss"

class InvestorForm extends Component {
    constructor(props) {
        super(props)

        this.modalHandler = this.modalHandler.bind(this);
    }

    modalHandler() {
        this.props.onModalClose();
    }

    componentWillMount() {
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
                <form name="contact" method="POST" data-netlify="true">
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
                    <p>
                        <label><input type="checkbox" name="accept_terms"/> I accept the terms and conditions</label>
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

export default InvestorForm

