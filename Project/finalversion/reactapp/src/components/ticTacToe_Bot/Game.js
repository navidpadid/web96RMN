import React, { Component } from 'react';
import './gameStyle.css'
import Board from './Board'
import { connect } from 'react-redux'

class Game extends React.Component {
    render() {
        if(!this.props.isLoggedIn){
            return <h1>Please login to play game!</h1>
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
    isLoggedIn: state.reduceruser.isLoggedIn
});


export default connect(
    mapStateToProps
)(Game)