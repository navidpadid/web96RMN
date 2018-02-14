import React, { Component } from 'react';
import NavLogOut from './NavLogOut'
import NavLoggedIn from "./NavLoggedIn";
import { connect } from 'react-redux'

class Navconditional extends Component {

    render(){
        if (!this.props.isLoggedIn){
            return (
                  <NavLogOut />
            );
        }
        else {
            return(
                <NavLoggedIn/>
            );
        }
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn,
});

export default connect(
    mapStateToProps
)(Navconditional)
