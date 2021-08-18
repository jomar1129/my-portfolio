import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Contacts from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Success from "./components/Contact/Success";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contacts} />
          <Route path="/success" exact component={Success} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
