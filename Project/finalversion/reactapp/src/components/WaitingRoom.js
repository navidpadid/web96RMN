import React, { Component } from 'react';
import "../styles/loaderStyle.css";
import Parse from 'parse';
import {startgame} from '../redux/user/componentPlayer/onlineaction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class WaitingRoom extends Component{

    constructor(props){
        super(props);
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://localhost:8030/wp';

        this.handleCancle = this.handleCancle.bind(this);
        this.handleClosing = this.handleClosing.bind(this);


        let currentUser = Parse.User.current();
        this.userId = currentUser.id;
        this.waitingSelfObj = null;
        this.destObjId = null;
        this.QueryFinded = false;

        this.state ={
            created:false,
            founded:false, //if else for live query
            gameSaved: false,
            deletedSelf:false,
            ending:false,
        };
    }
    handleClosing(){
        Parse.LiveQuery.close();
        this.props.history.push('/Online')
    }
    handleCancle(){
            let Waitingroom = Parse.Object.extend("Waitingroom");
            let waitingroom = new Parse.Query(Waitingroom);
            let currentUser = Parse.User.current();
            let userId = currentUser.id;
            waitingroom.equalTo('Userid', userId);
        waitingroom.first({
            success: function(results) {
                // Do something with the returned Parse.Object values
                results.destroy();
            },
            error: function(error) {
                console.log("Error: " + error.code + " " + error.message);
            }
        });

        //  history.push; not work
        this.props.history.push('/');

    }

    static theHasher(inputIn) {
        let hash = 5381, i = inputIn.length;
        while(i)
            hash = (hash * 33) ^ inputIn.charCodeAt(--i);
        return hash >>> 0;
    }
    static saveGameandStart(component, startgameON) {
        let x = WaitingRoom.theHasher(component.userId);
        let y = WaitingRoom.theHasher(component.destObjId);
        let f = x ^ y;
        f = f.toString();
        let createGameObj = new Parse.Object.extend("Online");
        let GametoSave = new createGameObj;
        GametoSave.set("UsersHash", f);
        GametoSave.set("TurnUser", component.userId);
        GametoSave.save(null, {
            success: function (createGameObj) {
                // Execute any logic that should take place after the object is saved.
                console.log('New object created with objectId: ' + createGameObj.id);
                startgameON(component.destObjId, f);
                component.setState({
                    gameSaved: true
                });
            },
            error: function (createGameObj, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                //todo check if online or ERROR ON DB
                startgameON(component.destObjId, f);
                if (error.message =="user already online"){
                    component.setState({
                        gameSaved: true
                    });
                }
                console.log('Failed to create new object, with error code: ' + error.message);
            }
        });
    }
    componentDidUpdate(){
        let startgameON = this.props.startgame;
        let component = this;

        if(!this.state.founded) {
            let query = new Parse.Query('Waitingroom');
            query.notEqualTo("Userid", component.userId);
            query.first({
                success: function (object) {
                    if (object) {
                        component.destObjId = object.get('Userid');
                        component.QueryFinded = true;
                        component.setState({
                            founded: true,
                        });
                    }
                    else {
                        component.QueryFinded = false;
                        component.setState({
                            founded: true,
                        });
                    }
                },
                error: function (error) {
                    console.log("Error connecting to DB:" + error)
                }
            })
        }else if(!this.state.gameSaved){
            if(component.QueryFinded){
                WaitingRoom.saveGameandStart(component, startgameON);
            }
            else {
                let query = new Parse.Query('Waitingroom');
                query.notEqualTo("Userid", component.userId);
                let subscription = query.subscribe();
                subscription.on('create', (object) => {
                    component.destObjId = object.get('Userid');
                    console.log(component);
                    WaitingRoom.saveGameandStart(component,startgameON);
                });
            }
        }else if(!this.state.deletedSelf){

            //todo handle with timout in backend
            component.waitingSelfObj.destroy({
                success: function(myObject) {
                    // The object was deleted from the Parse Cloud.
                    component.setState({
                        deletedSelf:true
                    });
                },
                error: function(myObject, error) {
                    // The delete failed.
                    // error is a Parse.Error with an error code and message.
                }
            });
        }else if(!this.state.ending){
            component.handleClosing();
        }
    }
    componentDidMount(){
        if(!this.props.isLoggedIn){
            return
        }
        let startgameON = this.props.startgame;
        let component = this;


        if(!this.state.created){
            let Waitingroom = Parse.Object.extend("Waitingroom");
            let waitingroom = new Waitingroom();
            waitingroom.set('Userid', component.userId);

            waitingroom.save(null, {
                success: function(obj) {
                    component.waitingSelfObj = obj;
                    component.setState({
                       created:true,
                    });
                    console.log('New object created with objectId: ' + waitingroom.get('Userid'));

                },
                error: function(obj, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        }
    }


    render(){
        if(this.props.isLoggedIn) {
            return (
                <div style={{textAlign: 'center', minWidth: '70%'}}>
                    <h1>Wating to find a player...</h1>
                    <div>
                        <div className="loader"></div>
                        <button type="button" className="btn btn-primary" onClick={this.handleCancle}
                                style={{width: '20%', marginLeft: '5%', minWidth: '150px'}}>Cancel
                        </button>
                    </div>
                </div>);
        }
        else {
            return <h1>Please login!</h1>
        }
    }

}

const mapStateToProps = state => ({
    competitorId: state.reducerOnline.competitorId,
    isLoggedIn: state.reduceruser.isLoggedIn
});
const mapDispatchToProps = dispatch => bindActionCreators({
    startgame
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingRoom)