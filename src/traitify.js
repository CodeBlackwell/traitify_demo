import React, { Component } from 'react';
import Traitify from 'traitify-widgets'

export default class TraitifyAssessment extends Component {
    renderWidget() {
        Traitify.setHost("api.Traitify.com");
        Traitify.setPublicKey("your public key");

        let assessment = Traitify.ui.component();
        assessment.assessmentID("an assessment id you have generated via a server side client");
        assessment.target("#assessment");
        assessment.render();
    }

    render() {
        return (
            <div className="assessment">
                {this.renderWidget()}
            </div>
        );
    }
}
