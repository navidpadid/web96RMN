import React, { Component } from 'react';
import Parse from 'parse'
import { connect } from 'react-redux'


class Leaders extends Component {

    constructor(props){
        super(props);
        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.getDataFromServerForCountry = this.getDataFromServerForCountry.bind(this);
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://192.168.200.125:8030/wp';
        this.state ={local:false,userData:[],otherData:[]};
    }

    getDataFromServer() {
            let CurrentUser = Parse.User.current();
            let userId = CurrentUser.get('username');
            let leaderBoardsObj = Parse.Object.extend('Leaderboards');
            let query = new Parse.Query(leaderBoardsObj);
            let result = null;
            let resultCountry = null;
            let rank = null;
            let component = this;
            query.equalTo('Username', userId);
            query.first({
                success: function (results) {
                    result = results.get('Score');
                    resultCountry = results.get('Country');
                    let SubQuery = new Parse.Query(leaderBoardsObj);
                    SubQuery.greaterThan('Score', result);
                    SubQuery.count({
                        success: function (count) {
                            // The count request succeeded. Show the count
                            //alert("Sean has played " + count + " games");
                            rank = count;
                            component.setState({
                                ...component.state,
                                local:false,
                                userData: [result, resultCountry, rank + 1]
                            });
                        },
                        error: function (error) {
                            // The request failed
                        }
                    });

                    //todo Inja neshun mide result va resultCountry o
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                    result = "Error: " + error.code + " " + error.message;
                }
            });
            let newQuery = new Parse.Query(leaderBoardsObj);
            newQuery.limit(15);
            newQuery.descending('Score');
            newQuery.find({
                success: function (results) {
                    //alert("Successfully retrieved " + results.length + " scores.");
                    // Do something with the returned Parse.Object values
                    component.setState({
                        ...component.state,
                        otherData: results
                    });
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });

    }
    getDataFromServerForCountry() {
            let CurrentUser = Parse.User.current();
            let userId = CurrentUser.get('username');
            let leaderBoardsObj = Parse.Object.extend('Leaderboards');
            let query = new Parse.Query(leaderBoardsObj);
            let result = null;
            let resultCountry = null;
            let rank = null;
            let component = this;
            query.equalTo('Username', userId);
            query.first({
                success: function (results) {
                    result = results.get('Score');
                    resultCountry = results.get('Country');
                    let SubQuery = new Parse.Query(leaderBoardsObj);
                    SubQuery.greaterThan('Score', result);
                    SubQuery.equalTo('Country',resultCountry);
                    SubQuery.count({
                        success: function (count) {
                            // The count request succeeded. Show the count
                            //alert("Sean has played " + count + " games");
                            rank = count;
                            component.setState({
                                ...component.state,
                                local:true,
                                userData: [result, resultCountry, rank + 1]
                            });
                        },
                        error: function (error) {
                            // The request failed
                        }
                    });

                    //todo Inja neshun mide result va resultCountry o
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                    result = "Error: " + error.code + " " + error.message;
                }
            });
            let newQuery = new Parse.Query(leaderBoardsObj);
            // let country = CurrentUser.get('country');
            // if (!country)
            newQuery.equalTo('Country',CurrentUser.get('country'));
            newQuery.limit(15);
            newQuery.descending('Score');
            newQuery.find({
                success: function (results) {
                    //alert("Successfully retrieved " + results.length + " scores.");
                    // Do something with the returned Parse.Object values
                    component.setState({
                        ...component.state,
                        otherData: results
                    });
                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
    }

// renderOthers(){
    //
    // }
    render(){

        let userRank = this.state.userData;
        let otherdata = this.state.otherData;
        let UseR=null;
        let others = null;
        if (userRank.length > 0){
            if (!this.state.local){
                UseR = <a className="list-group-item active">Your Score : {this.state.userData[0]} -- Your Country: {this.state.userData[1]} -- Your Rank Globally: {this.state.userData[2]}
                </a>;
            }
            else {
                UseR = <a className="list-group-item active">Your Score : {this.state.userData[0]} -- Your Country: {this.state.userData[1]} -- Your Rank locally: {this.state.userData[2]} </a>;
            }
        }
        else {
            UseR = <a className="list-group-item active">Please Login To See Your Rank Or No Games Played</a>;
        }

        if(otherdata.length > 0){
            others = otherdata.map((item,index) => {
                return (
                    <a className="list-group-item" key={item.id}>
                        Rank : {index + 1} -- Username : {item.get('Username')} -- Country : {item.get('Country')} --  Score : {item.get('Score')}
                    </a>
                );
            });
        }

        return (
            <div>
            <h1 style={{textAlign:'center'}}>Leaderboards</h1>
            <div className="container">
                <h2>Rankings And Scores Top 15!!</h2>
                <button className="btn btn-primary"
                        disabled={!this.props.isLoggedIn}
                        onClick={this.getDataFromServerForCountry}
                >
                    See Ranks In Your Country!
                </button>
                <button className="btn btn-primary"
                        disabled={!this.props.isLoggedIn}
                        onClick={this.getDataFromServer}
                >
                    See Ranks Globally!
                </button>
                <div className="list-group">
                    {UseR}
                    {others}

                </div>
            </div>
        </div>);
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn
});



export default connect(
    mapStateToProps
)(Leaders)