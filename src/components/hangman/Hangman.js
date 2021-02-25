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
            gameOver: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        if (this.state.gameOver) {
            return (
                <div className="text-center mt-5">
                    <h1>GAME OVER</h1>
                </div>
            )
        } else {
            return (
                <>
                <div className="text-center mt-5">
                    <div>
                        {this.state.displayPhrase}
                    </div>
                    <div>
                        <input className="form-control-sm" type="text" value={this.state.input} onChange={this.handleChange}/>
                    </div>
                    <div>
                        Number of Bad Tries:&nbsp;{this.state.numErrors}
                    </div>
                </div>
                <div className="m-5 row">
                    <div className="col-sm text-center">
                        <h6><strong>DESCRIPTION</strong></h6>
                        <p>
                            If you live under a rock and you haven't played hangman before, then you're in luck!
                            Cause this long-winded paragraph will describe to you what hangman is. Now, read carefully,
                            for if you do not, a man may be hung to death!
                            <hr/>
                            Basically, you guess random letters using the keyboard until you guess all of the letters that are
                            in the concealed word/phrase. You only get 6 tries. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <h6><strong>INSTRUCTIONS</strong></h6>
                        <ol>
                            <li>put in characters</li>
                            <li>pray they are correct</li>
                            <li>if you see game over then the game is over</li>
                        </ol>
                    </div>
                </div>
                </>
            )
        }
    }

    /*
    when the user enters input into the text field, the state of this component is updated accordingly. This
    is the only function that changes the state of the component.
    */
    handleChange(event) {
        const input = event.target.value;
        const char = input[input.length-1];
        const triedCharacters = this.state.triedCharacters;
        const displayPhrase = this.state.displayPhrase;
        var updatedDisplayPhrase = this.state.displayPhrase;
        var updatedTriedCharacters = this.state.triedCharacters;
        var updatedNumErrors = this.state.numErrors;
        var updatedGameOver = this.state.gameOver;
        
        //if the inputted character has not yet been tried
        if (!this.state.triedCharacters.has(char)) {
            updatedTriedCharacters = triedCharacters.add(char);
            //case where the character inputted is correct and not yet tried
            if (this.state.correctCharacters.has(char)) {
                const charIndexes = this.getCharacterIndexes(char);
                var tmpPhrase = displayPhrase
                for (var i=0; i<charIndexes.length; i++) {
                    tmpPhrase = tmpPhrase.substr(0, charIndexes[i]) + char + tmpPhrase.substr(charIndexes[i]+1);
                }
                updatedDisplayPhrase = tmpPhrase;
            //case where the inputted character is an error
            } else {
                updatedDisplayPhrase = this.state.displayPhrase;
                updatedNumErrors += 1;
                if (updatedNumErrors >= 6) {
                    updatedGameOver = true;
                }
                
            }
        //case where the inputted character has already been tried
        } else {
            updatedDisplayPhrase = this.state.displayPhrase;
            updatedTriedCharacters = this.state.triedCharacters;
        }
        //update the state and rerender the component each time the user gives input
        this.setState({
            input: event.target.value,
            triedCharacters: updatedTriedCharacters,
            displayPhrase: updatedDisplayPhrase,
            numErrors: updatedNumErrors,
            gameOver: updatedGameOver,
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
