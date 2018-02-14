import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom'
import About from "./components/About"
import Leaders from './components/Leaders'
import HomeBody from './components/HomeBody'
import NavConditional from './components/Navconditional'
import NotFound from './components/NotFound';
import TwoPlayerOff from './components/ticTacToe_twoPlayer/Game'
import playAI from './components/ticTacToe_Bot/Game'
import Profile from "./components/Profile";
import ProfileView from "./components/profileView";
import WaitingRoom from "./components/WaitingRoom"
import Online from './components/ticTacToe_Online/Game'
import MusicBack from './music/musicBack.mp3'
class App extends Component {
    render(){
        return(
            <div>
                <audio src={MusicBack} autoPlay={true} loop="true" height={0} width={0}/>
                <NavConditional/>
                <div style={{color:'#404040'}}>
                    <Switch>
                        <Route exact path="/" component={HomeBody}/>
                        <Route exact path="/OffTwoPlayer" component={TwoPlayerOff}/>
                        <Route exact path="/Leaderboards" component={Leaders}/>
                        <Route exact path="/About" component={About}/>
                        <Route exact path="/Profile" component={Profile}/>
                        <Route exact path="/PlayAI" component={playAI}/>
                        <Route exact path="/WaitingRoom" component={WaitingRoom}/>
                        <Route exact path="/Online" component={Online}/>
                        <Route exact path="/ProfileView" component={ProfileView}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App