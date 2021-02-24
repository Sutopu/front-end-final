import React, { Component } from 'react';

export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.wordList = [
            "doki doki literature club",
            "book",
            "word or phrase"
        ]
        const word = this.getWord();
        const characters = this.getCorrectLetters(word);

        this.state = {
            input: '',
            correctWord: word,
            correctCharacters: characters,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
            return (
                <>
                <div className="centerEverything pr-2">
                    <input className="form-control-sm" type="text" onChange={this.handleChange}/>
                    {this.state.input}
                </div>
                </>
            )
    }

    /*
    when the user changes value of textfield, input state variable changes accordingly.
    */
    handleChange(event) {
        this.setState({input: event.target.value})
    }

    /*
    constructor helper function. Given a string, returns all unique characters in that string.
    */
    getCorrectLetters(word) {
        var letterSet = new Set();
        for (var i=0; i<word.length; i++) {
            letterSet.add(word[i]);
        }
        return letterSet;
    }

    /*
    constructor helper function. Chooses a random word/phrase from a list of phrases declared in the constructor.
    */
    getPhrase() {
        const randomWordIndex = Math.floor(Math.random() * this.wordList.length);
        const word = this.wordList[randomWordIndex];
        return word;
    }
}
