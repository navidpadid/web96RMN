import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupBtn extends Component {
    constructor(props){
        super(props);
    };

    render(){
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-bold">Sign up</h4>
                            <button id="closeModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div style={{marginBottom:'60px'}} className="md-form">
                                <i className="fa fa-user prefix grey-text"></i>
                                <Field name="Username" component="input" type="text" id="orangeForm-name" className="form-control validate"/>
                                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name">Username</label>
                            </div>

                            <div style={{marginBottom:'60px'}} className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <Field name="Email" component="input"  type="email" id="orangeForm-email" className="form-control validate"/>
                                <label data-error="wrong" data-success="right" htmlFor="orangeForm-email">Your email</label>
                            </div>
                            <div style={{marginBottom:'60px'}} className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <Field name="Password" component="input" style={{marginBottom:'4px'}} type="password" id="orangeForm-pass" className="form-control validate"/>
                                <label  data-error="wrong" data-success="right" htmlFor="orangeForm-pass">Your password</label>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="submit" disabled={pristine || submitting} className="btn btn-deep-orange">Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
           );
    }
}

export default reduxForm({
    form: 'sigUpForm'  // a unique identifier for this form
})(SignupBtn)