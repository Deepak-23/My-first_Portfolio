import React, { Component } from 'react';
import pic from "../../portrait_small.jpg";
class Nav extends Component{
    render(){
        return(
            <div>
    
            
            <header>
    <div className="menu-btn">
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>

    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
          <a href={"/index"} className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href={"/about"} className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href={"/work"} className="nav-link">
            My Work
          </a>
        </li>
        <li class="nav-item">
          <a href={"/contact"} className="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  </header>

            </div>
        );
    }
}

export default Nav;