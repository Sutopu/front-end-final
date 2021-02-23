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
                    <h1 className="header">Click an Image to Start</h1>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/hangman">
                                <img src={hangmanImage} alt="hangman" className="home-image"></img>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/rockpaperscissors">
                                <img src={rpsImage} alt="Rock Paper Scissors" className="home-image"></img>
                            </Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/cleverishbot">
                                <img src={cleverbotImage} alt="Cleverbot" className="home-image"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
