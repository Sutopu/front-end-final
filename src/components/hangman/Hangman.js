import React, { Component } from 'react';

/*
to do:
1. display the correct word as a bunch of underscores
2. when the user gets a correct character
    - if character in triedCharacter set:
        - nothing happens
    - else:
        - underscores in positions where the character appears are replaced with the correct character
        - tried characters should already be in the text field
3. when the user types an incorrect character
    - if character in triedCharacter set:
        - nothing happens
    - else
        - numErrors increases by one
        - user is alerted that they hit a an incorrect character
*/

//main component for the Hangman page. Contains all logic for the game 
//and subcomponents that help the game be displayed/function.
export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.wordList = [
            "doki doki literature club",
            "book",
            "word or phrase"
        ]

        const phrase = this.getPhrase();
        const characters = this.getCorrectLetters(phrase);
        const displayPhrase = this.formatUnderscored(phrase);
        this.state = {
            input: '',
            correctPhrase: phrase,
            correctCharacters: characters,
            triedCharacters: new Set(),
            numErrors: 0,
            displayPhrase: displayPhrase,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
            return (
                <>
                <div className="centerEverything pr-2">
                    <input className="form-control-sm" type="text" value={this.state.input} onChange={this.handleChange}/>
                </div>
                <div>
                    {this.state.displayPhrase}
                </div>
                </>
            )
    }

    /*
    when the user changes value of textfield, input state variable changes accordingly.
    */
    handleChange(event) {
        const input = event.target.value;
        const char = input[input.length-1];
        const triedCharacters = this.state.triedCharacters;
        const displayPhrase = this.state.displayPhrase;
        let updatedDisplayPhrase, updatedTriedCharacters, updatedNumErrors;
        

        if (!this.state.triedCharacters.has(char)) {
            updatedTriedCharacters = triedCharacters.add(char);
            if (this.state.correctCharacters.has(char)) {
                const charIndexes = this.getCharacterIndexes(char);
                var tmpPhrase = displayPhrase
                for (var i=0; i<charIndexes.length; i++) {
                    tmpPhrase = tmpPhrase.substr(0, charIndexes[i]) + char + tmpPhrase.substr(charIndexes[i]+1);
                }
                updatedDisplayPhrase = tmpPhrase;
            }
        } 
        this.setState({
            input: event.target.value,
            triedCharacters: updatedTriedCharacters,
            displayPhrase: updatedDisplayPhrase
        })
    }

    /*
    constructor helper function. Given a string, returns all unique characters in that string.
    */
    getCorrectLetters(phrase) {
        var letterSet = new Set();
        for (var i=0; i<phrase.length; i++) {
            letterSet.add(phrase[i]);
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

    /*
    function that takes a word and formats it such that all non-space characters appear as
    hashtags.
    */
    formatUnderscored(phrase) {
        var formatedPhrase = '';
        for (var i=0; i<phrase.length; i++) {
            if (phrase[i] != " ") {
                formatedPhrase += "#";
            } else {
                formatedPhrase += phrase[i];
            }
        }
        return formatedPhrase;
    }

    /*
    helper function used in handleChange() in order to find the indexes of all the instances of char
    in this.state.correctPhrase
    */
    getCharacterIndexes(char) {
        const phrase = this.state.correctPhrase;
        var indexes = []
        for (var i=0; i<phrase.length; i++) {
            if (phrase[i] == char) {
                indexes.push(i);
            }
        }
        return indexes;
    }
    
}
