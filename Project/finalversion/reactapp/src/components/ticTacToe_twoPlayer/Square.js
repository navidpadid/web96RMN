import React, { Component } from 'react';
import './gameStyle.css'

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : null,
        }
    }

    render() {
        return (
            <button className="btn btn-primary square"
            onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;