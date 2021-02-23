import React, { Component } from 'react';

export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="centerEverything">
                <label>
                    Word:
                    <input className="form-control-sm" type="text" value={this.state.input} onChange={this.handleChange}/>
                </label>
                <button className="btn button" onClick={this.handleSubmit}>CLICK</button>
            </div>
            
        )
    }

    handleSubmit(input) {
        alert(this.state.input);
    }

    handleChange(event) {
        this.setState({input: event.target.value})
    }
}
