import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import AuthProvider from "./auth/AuthContext";
import Actors from "./actors/Actors";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";
import ActorPage from "./actors/ActorPage";
import Movies from "./movies/Movies";
import MoviePage from "./movies/MoviePage";
import AddMovie from "./movies/AddMovie";
import AddActor from "./actors/AddActor";
import NotFound from "./ui/NotFound";
import Footer from "./ui/Footer";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <PrivateRoute exact path="/movies/add" component={AddMovie} />
          <Route exact path="/movies/:movieId" component={MoviePage} />
          <PrivateRoute
            exact
            path="/movies/:movieId/edit"
            component={AddMovie}
          />
          <Route exact path="/actors" component={Actors} />
          <PrivateRoute exact path="/actors/add" component={AddActor} />
          <Route exact path="/actors/:actorId" component={ActorPage} />
          <PrivateRoute
            exact
            path="/actors/:actorId/edit"
            component={AddActor}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
