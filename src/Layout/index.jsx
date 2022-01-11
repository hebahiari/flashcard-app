import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react"
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Deck from "./Deck/Deck"


function Layout() {



  // useEffect(()=> {

  //   fetch("http://localhost:8080/decks")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDecks(data);
  //     })
  // },[]);

  // useEffect(()=> {

  //    fetch("http://localhost:8080/cards")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCards(data);
  //     })
  // },[])

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
