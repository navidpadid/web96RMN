import React, { Component } from 'react';
import './gameStyle.css'
import Square from './Square'
class Board extends Component {
    constructor(props){
        super(props);
        this.state ={
            squares: new Array(9).fill(null),
            xIsNext: true
        };
        this.handleClick = this.handleClick.bind(this);
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
        let status;
        const winner = Board.calculateWinner(this.state.squares);
        let draw = Board.calculateDraw(this.state.squares);

        if (winner){
            status = 'winner is '+ winner;
        }
        else if(draw){
            status = 'Draw!!!';
        }
        else if (this.state.xIsNext){
             status = 'Next player: X';
        }
        else {
             status = 'Next player: O';
        }

        if(winner || draw){
            setTimeout(()=> this.setState({squares: new Array(9).fill(null),
                xIsNext: true}),3000)
        }
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
}



export default Board