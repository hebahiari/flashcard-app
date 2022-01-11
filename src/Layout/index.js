import { Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckOptions from "./Deck/DeckOptions";
import DeckList from "./Deck/DeckList";
import CreateDeckButton from "./Buttons/CreateDeckButton";

function Layout() {
  return (
    <span>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <CreateDeckButton />
            <DeckList />
          </Route>
          <Route path="/decks/:deckId">
            <DeckOptions />
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
