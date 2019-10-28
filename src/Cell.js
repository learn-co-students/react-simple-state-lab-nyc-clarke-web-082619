import React, { Component } from 'react';

export default class Matrix extends Component {

    constructor(props) {
        super(props)
        // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
            color: this.props.value
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        // console.log(this.props.value);
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>

            </div>
        )
    }
}
