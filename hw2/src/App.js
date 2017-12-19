import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './riza.css';
import analytics_img from './image/analytics.png'
import authen_img from './image/auth.png'
import data_img from './image/database.png'
import host_img from './image/hosting.png'
import store_img from './image/storage.png'
import cloud_img from './image/functions.png'
import testlab_img from './image/testlab.png'
import crash_img from './image/crash.png'
import notif_img from './image/notifications.png'
import cinfig_img from './image/config.png'
import dynamic_img from './image/dynamiclinks.png'
import amb_img from './image/amb.png'
import mess_img from './image/cloudmessaging.png'
import awrds_img from './image/awrds.png'
import app_img from './image/appindexing.png'


class App extends Component {
    render() {
        return (
            <div className="App1">
                <div id="container" style={{backgroundColor: '#CFD8DC', marginLeft:'35%' }}>
                    {/*<img src="../analytics.png" />*/}
                    <br/>
                    <br/>
                    <p style={{fontFamily: 'Roboto', fontSize: '16px', color: 'rgba(0,0,0,.54)', marginLeft: '25px'}}>
                        Discover Firebase
                    </p>

                    <div id="wrapper_1">
                        <div id="anal">

                            <div id="analytics_img">
                                <img src={analytics_img} />
                            </div>

                            <div id="analytics_txt" >

                                <strong style={{fontSize: 'larger'}}>Analytics</strong> <br/>

                                <p style={{fontFamily: 'Roboto', fontSize: '15.5px', color: 'rgba(0,0,0,.5)'}}>
                                    Get detailed analytics to measure and<br/> analyze how users engage with your app<br/><br/>
                                </p>

                                <br/>

                                <div id="anal_learnMore">Learn more</div>
                                <div id="anal_get">get started</div>



                            </div>
                        </div>
                        <div id="authen">
                            <div id="authen_img">
                                <img src={authen_img} />
                            </div>

                            <div id="authen_txt">

                                <strong style={{fontSize: 'larger'}}>Authentication</strong><br/>

                                <p style={{fontFamily: 'Roboto', fontSize: '15.5px' ,color: 'rgba(0,0,0,.5)'}}>
                                    Authenticate and manage users from a variety of providers without server-side code <br/><br/>
                                </p>

                                <br/>

                                <div id="authen_learnMore">Learn more</div>
                                <div id="authen_get">get started</div>
                            </div>

                        </div>
                    </div>


                    <div id="wrapper_2">
                        <div id="data">
                            <div id="data_img">
                                <img src={data_img}/>
                            </div>

                            <div id="data_txt">

                                <strong style={{fontSize:' larger'}}>Database</strong><br/>

                                <p style={{fontFamily: 'Roboto', fontSize: '15.5px', color: 'rgba(0,0,0,0.5)'}}>
                                    Store and sync data in realtime across all connected clients<br/><br/><br/>
                                </p>

                                <br/>

                                <div id="data_learnMore">Learn more</div>
                                <div id="data_get">get started</div>
                            </div>
                        </div>
                        <div id="store">
                            <div id="store_img">
                                <img src={store_img}/>
                            </div>

                            <div id="store_txt">

                                <strong style={{fontSize: 'larger'}}> Storage</strong><br/>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Store and retrieve user generated content like images, audio, and video without server-side code<br/><br/>
                                </p>

                                <br/>

                                <div id="store_learnMore">Learn more</div>
                                <div id="store_get">get started</div>
                            </div>
                        </div>
                    </div>


                    <div id="wrapper_3">
                        <div id="host">
                            <div id="host_img">
                                <img src={host_img}/>
                            </div>

                            <div id="host_txt">

                                <strong style={{fontSize: 'larger'}}>Hosting</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Deploy web and mobile web apps in seconds using a secure global content delivery network<br/><br/>
                                </p>

                                <br/>

                                <div id="host_learnMore">Learn more</div>
                                <div id="host_get">get started</div>
                            </div>


                        </div>
                        <div id="cloud">
                            <div id="cloud_img">
                                <img src={cloud_img} />
                            </div>

                            <div id="cloud_txt">

                                <strong style={{fontSize: 'larger'}}>Cloud Functions</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Run managed backend code for your mobile app that extends and connects Firebase features<br/><br/>
                                </p>

                                <br/>

                                <div id="cloud_learnMore">Learn more</div>
                                <div id="cloud_get">get started</div>
                            </div>



                        </div>
                    </div>


                    <div id="wrapper_4">
                        <div id="testlab">
                            <div id="testlab_img">
                                <img src={testlab_img}/>
                            </div>

                            <div id="testlab_txt">

                                <strong style={{fontSize: 'larger'}}>Test Lab</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Test your Android apps against a wide range of devices<br/><br/><br/>
                                </p>

                                <br/>

                                <div id="testlab_learnMore">Learn more</div>
                                <div id="testlab_get">get started</div>
                            </div>



                        </div>
                        <div id="crash">
                            <div id="crash_img">
                                <img src={crash_img}/>
                            </div>

                            <div id="crash_txt">

                                <strong style={{fontSize: 'larger'}}>Crash Reporting</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Get actionable insights and comprehensive analytics whenever your app crashes or stops working<br/><br/>
                                </p>

                                <br/>

                                <div id="crash_learnMore">Learn more</div>
                                <div id="crash_get">get started</div>

                            </div>

                        </div>
                    </div>


                    <div id="wrapper_5">
                        <div id="notif">
                            <div id="notif_img">
                                <img src={notif_img}/>
                            </div>

                            <div id="notif_txt">

                                <strong style={{fontSize: 'larger'}}>Notifications</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Manage notification campaigns and send messages to engage the right users at the right moment<br/><br/>
                                </p>

                                <br/>

                                <div id="notif_learnMore">Learn more</div>
                                <div id="notif_get">get started</div>

                            </div>

                        </div>
                        <div id="config">
                            <div id="cinfig_img">
                                <img src={cinfig_img}/>
                            </div>

                            <div id="config_txt">

                                <strong style={{fontSize: 'larger'}}>Remote Config</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Customize and experiment with app behavior using server-side configuration parameters<br/><br/>
                                </p>

                                <br/>

                                <div id="config_learnMore">Learn more</div>
                                <div id="config_get">get started</div>
                            </div>



                        </div>
                    </div>


                    <div id="wrapper_6">
                        <div id="dynamic">
                            <div id="dynamic_img">
                                <img src={dynamic_img}/>
                            </div>

                            <div id="dynamic_txt">

                                <strong style={{fontSize: 'larger'}}>Dynamic Links</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Send users to the right place in your app whether or not it is already installed<br/><br/><br/>
                                </p>

                                <br/>

                                <div id="dynamic_learnMore">Learn more</div>
                                <div id="dynamic_get">get started</div>
                            </div>



                        </div>
                        <div id="amb">
                            <div id="amb_img">
                                <img src={amb_img}/>
                            </div>

                            <div id="amb_txt">

                                <strong style={{fontSize: 'larger'}}>AdMob</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Earn more from your apps the smart way by showing ads from millions of Google advertisers<br/><br/>
                                </p>

                                <br/>

                                <div id="amb_learnMore">Learn more</div>
                                <div id="amb_get">get started</div>
                            </div>



                        </div>
                    </div>


                    <div id="wrapper_7">
                        <div id="mess">
                            <div id="mess_img">
                                <img src={mess_img}/>
                            </div>

                            <div id="mess_txt">

                                <strong style={{fontSize: 'larger'}}>Cloud Messaging</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Send and receive messages reliably across platforms<br/><br/><br/>
                                </p>

                                <br/>

                                <div id="mess_learnMore">Learn more</div>
                                <div id="mess_get">get started</div>
                            </div>



                        </div>
                        <div id="awrds">
                            <div id="awrds_img">
                                <img src={awrds_img}/>
                            </div>

                            <div id="awrds_txt">

                                <strong style={{fontSize: 'larger'}}>AdWords</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Drive installs, gain deep insights into your conversions and run targeted campaigns to engage your userbase<br/><br/>
                                </p>

                                <br/>

                                <div id="awrds_learnMore">Learn more</div>
                                <div id="awrds_get">get started</div>
                            </div>



                        </div>
                    </div>


                    <div id="wrapper_8">
                        <div id="app">
                            <div id="app_img">
                                <img src={app_img}/>
                            </div>

                            <div id="app_txt">

                                <strong style={{fontSize: 'larger'}}>App Indexing</strong>

                                <p style={{fontFamily: 'Roboto', fontSize: '15px', color : 'rgba(0,0,0,0.5)'}}>
                                    Drive organic search traffic to your app<br/><br/><br/><br/>
                                </p>

                                <br/>

                                <div id="app_learnMore">Learn more</div>
                                <div id="app_get">get started</div>
                            </div>



                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

export default App;
