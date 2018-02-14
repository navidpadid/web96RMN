import React, { Component } from 'react';
import './gameStyle.css'
import Square from './Square'
import Parse from 'parse'
class Board extends Component {
    constructor(props){
        super(props);
        this.state ={
            squares: new Array(9).fill(null),
            xIsNext: true
        };
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://192.168.200.125:8030/wp';
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidUpdate(){
        if(!this.state.xIsNext && !Board.calculateWinner(this.state.squares) && !Board.calculateDraw(this.state.squares)){
            const clone = this.state.squares.slice();
            for (let i = 0; i < clone.length;i++){
                let val = clone[i];
                if (!val){
                    clone[i] = 'O';
                    console.log(i);
                    break
                }
            }
            this.setState({
                squares: clone,
                xIsNext: !this.state.xIsNext
            });
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        if (Board.calculateWinner(squares) || squares[i]){
            return;
        }
        if (this.state.xIsNext){
            squares[i] = 'X'
        }
        else {
            squares[i] = 'O'
        }
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={()=> this.handleClick(i)}
            />
            );
    }
    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    static calculateDraw(squares){
        let bool = true;
        // Array.prototype.forEach.call(values,(value)=>{
        //         console.log(value.value);
        // });
        Array.prototype.forEach.call(squares,
            (val) =>{
            if (!val){
                bool=false;
                }
            }
        );
        return bool;
    }

    render() {
        let status = this.winnerOrLoser();

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    winnerOrLoser() {
        let status;
        const winner = Board.calculateWinner(this.state.squares);
        let draw = Board.calculateDraw(this.state.squares);

        if (winner) {
            if (winner.toString() === "X") {
                status = 'winner is player';
            }
            else {
                status = 'winner is AI';

            }
        }
        else if (draw) {
            status = 'Draw!!!';
        }
        else if (this.state.xIsNext) {
            status = 'Player Turn';
        }
        else {
            status = 'AI Move';
        }

        if(winner || draw){
            this.ParseScore(winner, draw);
        }


        if (winner || draw) {
            setTimeout(() => this.setState({
                squares: new Array(9).fill(null),
                xIsNext: true
            }), 3000);
        }

        return status;
    }

    ParseScore(winner, draw) {
        let Leaders = Parse.Object.extend("Leaderboards");
        let leader = new Leaders();
        let currentUser = Parse.User.current();
        let country = currentUser.get('country');
        if (country) {
            leader.set('Country', country);
        }
        else {
            leader.set('Country', 'unknown');
        }
        leader.set("Username", currentUser.get('username'));

            // let query = new Parse.Query(leader);
            // let beforeScore = 0;
            // query.equalTo("Username", currentUser.get('username'));

        if (winner && winner.toString() === "X") {
            let score = 100;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Congrats!! you have learned 100 points');

                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
        else if (draw) {
            let score = 50;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Not bad! you have learned 50 points');

                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
        else {
            let score = 20;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('bad luck! you have learned 20 points');
                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    }

    // parseRemoveDuplicate(query, beforeScore) {
    //     query.find({
    //         success: function (results) {
    //             if (results) {
    //                 beforeScore = results[0].get('Score');
    //                 for (let i = 0; i < results.length; i++) {
    //                     results[i].destroy({
    //                         success: function (myObject) {
    //                             // The object was deleted from the Parse Cloud.
    //                             console.log("succsess delete")
    //                         },
    //                         error: function (myObject, error) {
    //                             // The delete failed.
    //                             // error is a Parse.Error with an error code and message.
    //                             console.log("eroor on delete" + error)
    //                         }
    //                     })
    //                 }
    //             }
    //         },
    //         error: function (error) {
    //             console("Error in cloud: " + error.code + " " + error.message);
    //         }
    //     });
    //     return beforeScore;
    // }
}



export default Board