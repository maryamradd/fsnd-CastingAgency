import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Actors from "./actors/Actors";
import {Navbar} from "./ui/Navbar";
import {Home} from "./ui/Home";
import ActorPage from "./actors/ActorPage";
import Movies from "./movies/Movies";
import MoviePage from "./movies/MoviePage";
import AddMovie from "./movies/AddMovie";
import AddActor from "./actors/AddActor";
import NotFound from "./ui/NotFound";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/add" component={AddMovie} />
          <Route exact path="/movies/:movieId" component={MoviePage} />
          <Route
            exact
            path="/movies/:movieId/edit"
            render={(props) => <AddMovie {...props} actionType="edit" />}
          />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/actors/add" component={AddActor} />
          <Route exact path="/actors/:actorId" component={ActorPage} />
          <Route
            exact
            path="/actors/:actorId/edit"
            render={(props) => <AddActor {...props} actionType="edit" />}
          />
          <Route exact path="/404" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
