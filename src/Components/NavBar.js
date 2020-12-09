

import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import './NavBar.css';
class Navbar extends Component{
    render() {
        return (
            <div>
            
             <nav className="blue">
    <div className="nav-wrapper">
      <a href="http://localhost:3000/" className="brand-logo"><FontAwesomeIcon icon={faCloud} id="CloudLogo" style={{padding:"8px 0px 0px 15px",fontSize:"2em"}}/> Cloud Commerce </a>
{/* Menu hamburguesa */}
      <a href="http://localhost:3000/" data-target="menu-responsive" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
        <li ><a href="http://localhost:3000/" ><CartWidget id="CartLogo" /></a></li>
      </ul>
    </div>
  </nav>

            </div>
        )
    }
}

export default Navbar
