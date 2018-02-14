import React, { Component } from 'react';

class About extends Component {
    render(){
        return (
            <div>
                <h1>Written by <a href={"http://navidmalek.blog.ir/"}> Navid</a> & Riza</h1>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.dideo.ir/embed/v/yt/tAGnKpE4NCI"></iframe>
                </div>
        </div>);
    }
}

export default About