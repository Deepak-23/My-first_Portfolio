import React, { Component } from 'react';
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import pic1 from "../../../src/Assets/img/projects/project1.jpg";
import pic2 from "../../../src/Assets/img/projects/project2.jpg";
import pic3 from "../../../src/Assets/img/projects/project3.jpg";
import pic4 from "../../../src/Assets/img/projects/project4.jpg";
class Work extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>
    <div class="project">
      <div class="item">
        <a href="#!">
          <img src="img/projects/project1.jpg" alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Simple Html Project!
        </a>
        <a href="https://github.com/chinuu2397/HTML_project" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project2.jpg" alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Resume
        </a>
        <a href="https://github.com/chinuu2397/chinuu2397.github.io" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project3.jpg" alt="Project"/>
        </a>
        <a href="https://github.com/chinuu2397/Simpe_Calculator" class="btn-light">
          <i class="fas fa-eye"></i>  Simple Calculator!
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project4.jpg" alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Split Landing Page!
        </a>
        <a href="https://github.com/chinuu2397/Split-Landing-Page" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      
    </div>
  </main>

                <Footer/>
            </div>
        );
    }
}

export default Work;