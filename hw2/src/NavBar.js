import React, { Component } from 'react';
import './navstyle.css';
import logo from "./image/logo.png";
import firebaseName from "./image/name.svg";
import threeDot from "./image/threeDot.svg";
import view from "./image/view.png";
import log from "./image/log.png";
import curser from "./image/cursor-512.png";

class NavBar extends Component {
    render() {
        return (
                <div className="header">
                    <div className="headerIn">
                        <div className="left">
                            <div className="logo">
                                <img id="logoIco" src={logo} alt={"no pic"}/>
                            </div>
                            <h1 id="firebaseNamecon">
                                <img src={firebaseName} id="firebaseName" alt={"no pic"}/>
                            </h1>
                        </div>
                        <div id="flex"></div>
                        <div className="optionRight">
                            <img id="viewOnly" src={view} alt={"no pic"}/>
                                <a href="#" target="_blank" id="GoTo" title="google docs">Go to docs</a>
                                <div className="dropdown">
                                    <img src={threeDot} className="threeDotImg" alt={"no pic"} title="setting"/>
                                        <div className="dropdown-content">
                                            <a href="#">Firebase docs <img src={curser} style={{width:"15px"}}/></a>
                                            <hr/>
                                                <a href="#">Alert suscribe</a>
                                        </div>
                                </div>
                                <div className="fb-appbar-login-area">
                                    <a className="gb_b gb_fb gb_R" aria-label="Google Account: navid malek
        (thedragonsapace@gmail.com)" href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://console.firebase.google.com/" role="button" tabIndex="0" aria-expanded="false" dideo-checked="true"><span className="gb_ab gbii"></span>
                                        <img src={log} title="Google Account"/>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NavBar;
