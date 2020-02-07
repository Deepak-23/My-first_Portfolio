import React, { Component } from 'react';
import Nav from "../nav/nav";

class Home extends Component{
    render(){
        return(
            <div>
            <Nav/>
               <main id="home">
    <h1 className="lg-heading">
      Deepak
      <span className="text-secondary">Hingwe</span>
    </h1>
    <h2 className="sm-heading">
      Web Developer,Designer & App Developer, Gamer
    </h2>
    <div className="icons">
      <a href="https://twitter.com/DeepakHingwe1">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="https://www.facebook.com/chinu272397">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/deepak-hingwe-1094b4149/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/chinuu2397">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>

            </div>
        );
    }
}

export default Home;
