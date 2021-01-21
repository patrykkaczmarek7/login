import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Header() {
    
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Logo</Link></h1>
            </div>
            <ul>
                <li><Link to="/"><i className="fas fa-shopping-cart"></i>Card</Link></li> 
                
                <li><Link to="/login"><i className="fas fa-user"></i>Sign in</Link></li>
            </ul>
        </header>
    )
}

export default Header
