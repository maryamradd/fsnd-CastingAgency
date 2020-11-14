import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Actors from "./components/Actors";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import ActorPage from "./components/ActorPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Actors" component={Actors} />
          <Route exact path="/Actors/5" component={ActorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
