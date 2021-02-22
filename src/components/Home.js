import React, { Component } from 'react'
//since images will be links to other "pages"
import { Link, withRouter } from "react-router-dom"

//paths to images
import hangmanImage from "../images/hangman.jpg"
import rpsImage from "../images/rps.jpg"
import cleverbotImage from "../images/cleverbot.jpg"
export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <h1 className="header">Check Out These Games!</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={hangmanImage} alt="hangman" className="home-image"></img>
                        </div>
                        <div className="col-sm">
                            <img src={rpsImage} alt="Rock Paper Scissors" className="home-image"></img>
                        </div>
                        <div className="col-sm">
                            <img src={cleverbotImage} alt="Cleverbot" className="home-image"></img>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
