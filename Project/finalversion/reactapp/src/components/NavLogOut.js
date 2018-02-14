import React, { Component } from 'react';
import LoginBtn from "./loginBtn"
import SignupBtn from "./SignupBtn"
import Parse from 'parse'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
signup
} from '../redux/user/useractions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class NavLogOut extends Component {
    constructor(props){
        super(props);
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://192.168.200.125:8030/wp';
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleSignUp = (values) => {
        let user = new Parse.User();
        user.set("username", values["Username"]);
        user.set("password", values["Password"]);
        user.set("email", values["Email"]);
        user.set("country",'unknown');
        let signAction = this.props.signup;
        document.getElementById('closeModal').click();
        user.signUp(null, {
            success: function(user) {
                signAction();
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });

    };
    handleLogin = (values)=>{
        let signAction = this.props.signup;
        document.getElementById('loginClose').click();
        Parse.User.logIn(values["Username"],values["Password"], {
            success: function(user) {
                signAction();
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                alert("Login Faild: Error code" + error.code + " " + error.message);
            }
        });
    };



    render(){

        return (
            <nav className="navbar navbar-inverse" style={{backgroundColor:"#2D2389",borderTop:0,orderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopRightRadius:0,borderTopLeftRadius:0}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Super Tic-Tac-Toe</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/OffTwoPlayer">Two player Offline</Link></li>
                    <li><Link to={"/Leaderboards"}>Leaderboards</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" data-toggle="modal" data-target="#modalRegisterForm"><span className="glyphicon glyphicon-user"></span>Sign up</a></li>
                    <li><a href="#" data-toggle="modal" data-target="#modalLoginForm"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
            <SignupBtn onSubmit={this.handleSignUp}/><LoginBtn onSubmit={this.handleLogin}/>
            </nav>);
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({
    signup
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLogOut)