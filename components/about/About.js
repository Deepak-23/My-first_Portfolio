import React, { Component } from 'react'
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import pic from "../../portrait_small.jpg";

class About extends Component{
    render(){
        return(
            <div>
            <Nav/>
            <Footer/>
            <main id="about">
    <h1 className="lg-heading">
      About
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      Let me tell you a few things...
    </h2>
    <div className="about-info">
      <img src="portrait_small.jpg" alt="Deepak Hingwe" className="bio-image"/>

      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p>My Name is Deepak Hingwe and i am Still Studying in <b>Sinhgad Institute of Technology,Lonavala</b></p>
      </div>

      <div className="job job-1">
        <h2>10Th - MGM Sr. Sec. School,Bagdona,Sarni(MP)</h2>
        <h4>CGPA - 6.2 </h4>
        <p>2014</p>
      </div>

      <div className="job job-2">
        <h2>12th - SDM Hr. Sec. School,Shobhapur,Sarni(MP)</h2>
        <h4>Percentage - 60.60%</h4>
        <p>2016</p>
      </div>

      <div className="job job-3">
        <h2>Sinhgad Institute Of Technology,Lonavala</h2>
        <h4>Branch -  Electronics and Telecommunication</h4>
        <p>2016-2020</p>
        <p></p>
      </div>
      </div>
  </main>

            

            </div>
        );
    }
}

export default About;
