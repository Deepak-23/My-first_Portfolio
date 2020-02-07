import React, { Component } from 'react';
import Nav from "../nav/nav";
import Footer from "../footer/footer";
class Contact extends Component{
    render(){
        return(
            <div>
            <Nav/>
            <main id="contact">
    <h1 className="lg-heading">
      Contact
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      This is how you can reach me...
    </h2>
    <div className="boxes">
      <div>
        <span className="text-secondary">Email: </span> deepakh377@gmail.com
      </div>
      <div>
        <span className="text-secondary">Phone: </span> (+91) 8806601554
      </div>
      <div>
          <span className="text-secondary">Address: </span>  Flat no 304,Kakade Complex,karve nagar,Pune(MH)
      </div>
    </div>
  </main>

            </div>
        );
    }
}

export default Contact;