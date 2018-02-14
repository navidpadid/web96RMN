import React, { Component } from 'react';
import gameGif from '../images/wargames.gif'
import { connect } from 'react-redux'


class HomeBody extends Component {
    constructor(props){
        super(props);
        this.handleAI = this.handleAI.bind(this);
        this.handleOnline = this.handleOnline.bind(this);
    }
    handleAI(){
        if (!this.props.isLoggedIn){
            alert("Login to store points!");
        }
        else {
            this.props.history.push('PlayAI');
          //  history.push; not work
        }
    }
    handleOnline(){
        if (!this.props.isLoggedIn){
            alert("Login to store points!");
        }
        else {
            this.props.history.push('WaitingRoom');
            //  history.push; not work
        }
    }
    render(){
        return (
            <span>
            <img className="img-responsive" style={{maxHeight:"450px",display:'inline-block'}} src={gameGif}/>
            <span>
                <button type="button" className="btn btn-primary" onClick={this.handleOnline} style={{width:'20%',minWidth:'150px',marginLeft:'5%',marginRight:'3%'}}>Play Online!</button>
                <button type="button" className="btn btn-primary" onClick={this.handleAI} style={{width:'20%',marginLeft:'5%',minWidth:'150px'}}>Play With AI!</button>
            </span>
        </span>);
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn,
});

export default connect(
    mapStateToProps
)(HomeBody)
