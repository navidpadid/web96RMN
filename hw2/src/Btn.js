import React, { Component } from 'react';

class Btn extends Component{
    constructor(props){
        super(props);
        this.state = {isToggeleOn: true};

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(){
        this.setState(
            prevState=>({
                isToggeleOn: !prevState.isToggeleOn
            })
        )
    }

    render(){
        return(
          <button onClick = {this.handleClick}>
              {this.state.isToggeleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}

export default Btn;