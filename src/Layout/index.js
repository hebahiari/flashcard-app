import { Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Deck from "./Deck/Deck"


function Layout() {

  return (
    <span>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
        <NotFound />
          </Route>
        </Switch>
      </div>
    </span>
  );
}

export default Layout;
