import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Film from "./pages/Films";
import People from "./pages/People";
import FilmDetails from "./pages/FilmDetails";
import PersonDetails from "./pages/PersonDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Film />
        </Route>
        <Route exact path="/films/:filmid">
          <FilmDetails />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/people/:personid">
          <PersonDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
