
// import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/Saved" component={Saved} />
        <Route exact path="/Home" component={Home} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
