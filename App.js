import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";




function App(){
    return(
        <Router>

        
        

        <Switch >
        <Route exact path="/index" >
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    
  </Router>    
        );
}

export default App;