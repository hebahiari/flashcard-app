import React, { useEffect, useState } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckList from "./DeckList";
import Deck from "./Deck/Deck"

function Home() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);

  return (
    <Switch>
    <Route exact path="/">
    <div>
      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push("/decks/new")}
      >
        Create Deck
      </button>
      <DeckList decks={decks} />
    </div>
    </Route>
    <Route path="/deck/:deckId">
      <Deck />
    </Route>
    </Switch>
  );
}

export default Home;
