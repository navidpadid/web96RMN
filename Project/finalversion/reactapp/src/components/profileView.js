import React, { Component } from 'react';
import Parse from 'parse'
import { connect } from 'react-redux'
class ProfileView extends Component {
    constructor(props){
        super(props);
        this.getDataFromServer = this.getDataFromServer.bind(this);
        Parse.initialize("myAppId123456", '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p');
        Parse.serverURL = 'http://localhost:8030/wp';
        this.state ={userData:[]};
    }
    componentDidMount(){
        if(this.props.isLoggedIn){
            this.getDataFromServer();
        }
    }
    getDataFromServer(){
            let currentUser = Parse.User.current();
            let Results = [currentUser.get('username'),currentUser.get('createdAt'),currentUser.get('email'),currentUser.get('lastname'),currentUser.get('gender'),currentUser.get('city'),currentUser.get('name'),currentUser.get('birthdate'),currentUser.get('country'),currentUser.get('updatedAt'),currentUser.get('ProfilePic')];
            this.setState({
               userData:Results
            });
    }

    render(){
        if (!this.props.isLoggedIn){
            return <h1>Please login to see profile!</h1>
        }

        if(this.state.userData.length < 1){
            return <h1>Data is loading...</h1>
        }
        const UserDataForShow = this.state.userData;
        if (UserDataForShow[10]){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <h3 className="panel-title">  {UserDataForShow[0]}</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-3 " align="center"> <img alt="No profile pic" src={UserDataForShow[10].url()} className="img-circle img-responsive"/> </div>

                                        <div className=" col-md-9 col-lg-9 ">
                                            <table className="table table-user-information">
                                                <tbody>
                                                <tr>
                                                    <td>name:</td>
                                                    <td>{UserDataForShow[6]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Lastname:</td>
                                                    <td>{UserDataForShow[3]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Signup date:</td>
                                                    <td>{UserDataForShow[1].toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Last update:</td>
                                                    <td>{UserDataForShow[9].toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date of Birth</td>
                                                    <td>{UserDataForShow[7]}</td>
                                                </tr>

                                                <tr>
                                                    <td>Gender</td>
                                                    <td>{UserDataForShow[4]}</td>
                                                </tr>

                                                <tr>
                                                    <td>Country </td>

                                                    <td>{UserDataForShow[8]}</td>
                                                </tr>

                                                <tr>
                                                    <td>City</td>
                                                    <td>{UserDataForShow[5]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td><a href={"mailto:"+UserDataForShow[2]} style={{color:'blue'}}>{UserDataForShow[2]}</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <h3 className="panel-title">  {UserDataForShow[0]}</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-3 " align="center"> <img alt="No profile pic" className="img-circle img-responsive"/> </div>

                                        <div className=" col-md-9 col-lg-9 ">
                                            <table className="table table-user-information">
                                                <tbody>
                                                <tr>
                                                    <td>name:</td>
                                                    <td>{UserDataForShow[6]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Lastname:</td>
                                                    <td>{UserDataForShow[3]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Signup date:</td>
                                                    <td>{UserDataForShow[1].toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Last update:</td>
                                                    <td>{UserDataForShow[9].toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date of Birth</td>
                                                    <td>{UserDataForShow[7]}</td>
                                                </tr>

                                                <tr>
                                                    <td>Gender</td>
                                                    <td>{UserDataForShow[4]}</td>
                                                </tr>

                                                <tr>
                                                    <td>Country </td>

                                                    <td>{UserDataForShow[8]}</td>
                                                </tr>

                                                <tr>
                                                    <td>City</td>
                                                    <td>{UserDataForShow[5]}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td><a href={"mailto:"+UserDataForShow[2]} style={{color:'blue'}}>{UserDataForShow[2]}</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
       };
}
const mapStateToProps = state => ({
    isLoggedIn: state.reduceruser.isLoggedIn,
});

export default connect(
    mapStateToProps
)(ProfileView)
