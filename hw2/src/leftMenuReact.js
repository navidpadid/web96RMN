import React, { Component } from 'react';
import './navstyle.css';
import './Stylesheets/css/main.css';
import './Stylesheets/css/materialdesignicons.min.css';


class leftMenuReact extends Component {
    render() {
        return (
            <div id="scrollable">
                <div className="left_nav_header">
                    <div className="flex-row-container">
                        <div className="navbar_item">
                            <i className="mdi mdi-home"></i>
                            <span>Overview</span>
                        </div>
                        <div className="navbar_item" id="settings">
                            <i className="material-icons">settings</i>
                        </div>
                    </div>

                </div>

                <div className="navbar_item">
                    <i className="mdi mdi-google-analytics"></i>
                    <span>Analytics</span>
                </div>

                <div className="navbar_label lbl_left">
                    develop
                </div>

                <div className="navbar_item">
                    <i className="mdi mdi-account-multiple"></i>
                    <span>Authentication</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-dns"></i>
                    <span>Database</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-folder-image"></i>
                    <span>Storage</span>
                </div>
                <div className="navbar_item">
                    <i className="material-icons">public</i>
                    <span>Hosting</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-json"></i>
                    <span>Functions</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-checkbox-marked-outline"></i>
                    <span>Test Lab</span>
                </div>
                <div className="navbar_item">
                    <i className="material-icons">bug_report</i>
                    <span>Crash Reporting</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-gauge"></i>
                    <span>Performance</span>
                </div>

                <div className="navbar_label lbl_left" >
                    grow
                </div>

                <div className="navbar_item">
                    <i className="mdi mdi-message-bulleted"></i>
                    <span>Notification</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-source-branch"></i>
                    <span>Remote Config</span>
                </div>
                <div className="navbar_item">
                    <i className="mdi mdi-link"></i>
                    <span>Dynamic Links</span>
                </div>

                <div className="navbar_label lbl_left">
                    earn
                </div>

                <div className="navbar_item">
                    <i className="mdi mdi-case-sensitive-alt"></i>
                    <span>AdMob</span>
                </div>


            </div>

    );
    }
    }


export default leftMenuReact;

