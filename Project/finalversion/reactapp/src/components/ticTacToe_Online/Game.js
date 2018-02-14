import React, { Component } from 'react';
import './gameStyle.css'
import Board from './Board'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {startgame} from '../../redux/user/componentPlayer/onlineaction'

class Game extends React.Component {

    render() {
        if(!this.props.isLoggedIn){
            return <h1> Please login to play!</h1>
        }
        else {
            return (
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn,
    competitorId: state.reducerOnline.competitorId,
    indexId: state.reducerOnline.indexId
});
const mapDispatchToProps = dispatch => bindActionCreators({
    startgame
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)