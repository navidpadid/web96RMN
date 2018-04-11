import React, { Component } from 'react';
import './gameStyle.css'
import Square from './Square'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Parse from 'parse'
import {startgame} from '../../redux/user/componentPlayer/onlineaction'

class Board extends Component {
    constructor(props){
        super(props);
        this.firstPace = true;
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://localhost:8030/wp';
        this.notInScore = true;
        this.state ={
            PlayerSymbol:null,
            intialSuccess: false,
            ended:false,
            isdisable: false,
            squares: new Array(9).fill(null),
            xIsNext: true
        };

        this.initialDisableTurn = this.initialDisableTurn.bind(this);
        this.handleClickUpdateOnline = this.handleClickUpdateOnline.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCancle = this.handleCancle.bind(this);
        this.ParseScore = this.ParseScore.bind(this);
    }

    handleClick(i){
        let newSquares = this.state.squares.slice();
        if (Board.calculateWinner(newSquares) || newSquares[i]){
            return;
        }
        if (this.state.xIsNext){
            newSquares[i] = 'X'
        }
        else {
            newSquares[i] = 'O'
        }

        this.handleClickUpdateOnline(i,newSquares);

    }

    handleClickUpdateOnline(i,newSquares) {
        let indexForHash = this.props.indexId;
        let Online = Parse.Object.extend("Online");
        let query = new Parse.Query(Online);
        let competer = this.props.competitorId;
        let component = this;
        query.equalTo("UsersHash", indexForHash);
        query.first({
            success: function (object) {
                object.set('TurnUser', competer);
                object.set('POneLast', i);
                object.set('latestSquares',newSquares);
                object.save(null, {
                    success: function (object) {
                        // Execute any logic that should take place after the object is saved.
                        console.log("success save");
                    },
                    error: function (object, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }

    renderSquare(i) {
        return (
            <Square
                disable = {this.state.isdisable}
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
        Array.prototype.forEach.call(squares,
            (val) =>{
            if (!val){
                bool=false;
                }
            }
        );
        return bool;
    }

//this was removed for final version...
    handleCancle(){
        //  history.push; not work
        this.props.history.push('/');
    }

    componentDidMount(){
            if(this.firstPace){
                this.initialDisableTurn();
            }
    }

    initialDisableTurn() {
        let indexForHash = this.props.indexId;
        let Online = Parse.Object.extend("Online");
        let query = new Parse.Query(Online);
        let component = this;
        let competer = this.props.competitorId;
        console.log("the competer id in props before query is ==>" + competer);
        query.equalTo("UsersHash", indexForHash);
        query.first({
            success: function (object) {
                let res = object.get('TurnUser');
                console.log("in the success and the competer is : " + competer);
                console.log("Turn User : " + object.get('TurnUser'));
                component.firstPace = false;

                if (object.get('TurnUser') === competer) {
                    component.setState({
                        PlayerSymbol:'O',
                        intialSuccess:true,
                        isdisable: true,
                        xIsNext: true
                    });
                }
                else {
                    component.setState({
                        PlayerSymbol:'X',
                        intialSuccess:true,
                        isdisable: false,
                        xIsNext: true
                    });
                }
            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }

        });
        let subscription = query.subscribe();
        subscription.on('update', (object) => {
            console.log('object updated');
            let updatedSquare = object.get('latestSquares');

            if (object.get("TurnUser") === competer){
                component.setState({
                    squares: updatedSquare,
                    isdisable:true,
                    xIsNext: !component.state.xIsNext
                });
            }
            else {
                component.setState({
                    squares: updatedSquare,
                    isdisable:false,
                    xIsNext: !component.state.xIsNext
                });
            }

        });
    }
    ParseScore(winner, draw) {
        let component = this;
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

        if (winner && winner.toString() === component.state.PlayerSymbol) {
            let score = 200;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Congrats!! you have learned 200 points');

                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
        else if (draw) {
            let score = 100;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('Not bad! you have learned 100 points');

                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
        else {
            let score = 40;
            leader.set('Score', score);
            leader.save(null, {
                success: function (leader) {
                    // Execute any logic that should take place after the object is saved.
                },
                error: function (leader, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    alert('bad luck! you have learned 40 points');
                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    }
    render() {

        if(!this.state.intialSuccess){
            return <h1>waiting for response...</h1>
        }
        let status;
        const winner = Board.calculateWinner(this.state.squares);
        let draw = Board.calculateDraw(this.state.squares);

        if (winner){
            status = 'winner is '+ winner;
        }
        else if(draw){
            status = 'Draw!!!';
        }
        else if (this.state.isdisable){
             status = 'Opponent turn';
        }
        else {
             status = 'Player turn';
        }
        if(this.notInScore && (winner || draw)){
            this.notInScore = false;
            this.ParseScore(winner, draw);
        }

        if(winner || draw){
            Parse.LiveQuery.close();

            // setTimeout(()=> this.setState({squares: new Array(9).fill(null),
            //     xIsNext: true,isdisable: false}),3000)
           // alert("end");
            let indexForHash = this.props.indexId;
            let Online = Parse.Object.extend("Online");
            let query = new Parse.Query(Online);
            let component = this;
            query.equalTo("UsersHash", indexForHash);
            query.first({
                success: function (object) {
                    object.destroy({
                        success: function(myObject) {
                            // The object was deleted from the Parse Cloud.
                            console.log("success delete from online")
                        },
                        error: function(myObject, error) {
                            // The delete failed.
                            // error is a Parse.Error with an error code and message.
                            console.log("unable to delete online game " + error)
                        }
                    });
                },
                error: function (error) {
                    console.log("Error: " + error.code + " " + error.message);
                }
            });
            setTimeout(()=> component.setState({...component.state,ended:true}),3000);
        }


        if(this.state.ended){
            // return(
            //     <div>
            //     <button type="button" className="btn btn-primary" onClick={this.handleCancle} style={{width:'50%',marginLeft:'5%',minWidth:'150px'}}>End</button>
            //     </div>
            // );
            window.location.href ='/';
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


const mapStateToProps = state => ({
    competitorId: state.reducerOnline.competitorId,
    indexId: state.reducerOnline.indexId
});
const mapDispatchToProps = dispatch => bindActionCreators({
    startgame
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
