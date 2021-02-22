import React from 'react'
import { Link, withRouter } from "react-router-dom"

//returns list items for the navbar.
export default function NavbarItem(props) {
    return (
        [
            <li key={1} className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>,

            <li key={2} className="nav-item">
                <Link className="nav-link" to="/hangman">Hangman</Link>
            </li>,

            <li key={3} className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>,

            <li key={4} className="nav-item">
                <Link className="nav-link" to="/rockpaperscissors">RPS</Link>
            </li>,

            <li key={5} className="nav-item">
                <Link className="nav-link" to="/cleverishbot">CleverishBot</Link>
            </li>,
            
        ]

    )
}
