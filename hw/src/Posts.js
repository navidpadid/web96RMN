import React, { Component } from 'react';

import Parse from 'parse'

Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
Parse.serverURL = 'http://localhost:8030/wp';

let GameScore = Parse.Object.extend("GameScore");


class  Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {navid:'default'};
    }

    componentWillMount() {
        let that = this;
        let query = new Parse.Query(GameScore);
        query.notEqualTo("playerName", "1");
        query.find({
            success: function(results) {
                    alert("Successfully retrieved " + results.length + " scores.");
                    console.log(that);
                    // Do something with the returned Parse.Object values
                that.setState({
                    navid: results
                })
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }


    render() {
        return (
            <div> {this.state.navid}</div>
        );
    }
}

export default Posts;