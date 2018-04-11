import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Parse from 'parse'
import {logout} from "../redux/user/useractions";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class NavLoggedIn extends Component {
    constructor(props){
        super(props);
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://localhost:8030/wp';
        this.hanleLogout = this.hanleLogout.bind(this);
        this.logOutDeleteWaiting = this.logOutDeleteWaiting.bind(this);
    };

    hanleLogout(){
        let component = this;
        let logOutFunc = this.props.logout;
        let IDUser = Parse.User.current();
        IDUser = IDUser.id;
        Parse.User.logOut().then(() => {
            logOutFunc();
            component.logOutDeleteWaiting(IDUser);
        });
    }

    logOutDeleteWaiting(IDUser) {
        let waitingroom = Parse.Object.extend("Waitingroom");
        let query = new Parse.Query(waitingroom);

        query.equalTo("Userid", IDUser);

        query.first({
            success: function (result) {
                if (result) {
                    result.destroy();
                }
            },
            error: function (error) {
                console("Error in remove waiting: " + error.code + " " + error.message);
            }
        });
    }

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
                        <li><Link to="/ProfileView"><span className="glyphicon glyphicon-user"></span> See Profile </Link></li>
                        <li><Link to="/Profile"><span className="glyphicon glyphicon-user"></span> Edit Profile</Link></li>
                        <li><Link onClick={this.hanleLogout} to="/"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                    </ul>
                </div>
            </nav>);
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLoggedIn);