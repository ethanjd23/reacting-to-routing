import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Film from "./pages/Films";
import People from "./pages/People";

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
        <Route exact path="/people">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
