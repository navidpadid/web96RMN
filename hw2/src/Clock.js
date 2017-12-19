import React, { Component } from 'react';

class  Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>clock is {this.state.date.toLocaleString()}</div>
        );
    }
}

export default Clock;