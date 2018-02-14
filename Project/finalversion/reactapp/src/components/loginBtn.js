import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class loginBtn extends Component {
    render(){
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-bold">Login</h4>
                            <button id="loginClose" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div style={{marginBottom:'60px'}} className="md-form">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <Field name="Username" component="input"  type="text" id="orangeForm-name" className="form-control validate"/>
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-name">Username</label>
                            </div>

                            <div style={{marginBottom:'60px'}} className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <Field name="Password" component="input" style={{marginBottom:'4px'}} type="password" id="orangeForm-pass" className="form-control validate"/>
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Password</label>
                            </div>

                        </div>
                        <div style={{marginBottom:'45px'}} className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-default" disabled={pristine || submitting} >Login</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}


export default reduxForm({
    form: 'loginForm'  // a unique identifier for this form
})(loginBtn)