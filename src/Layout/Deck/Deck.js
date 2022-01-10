import { Switch, Route, useParams } from "react-router-dom";
import {
  listDecks,
  createDeck,
  readDeck,
  updateDeck,
  deleteDeck,
  createCard,
  readCard,
  updateCard,
  deleteCard,
} from "../../utils/api";
import EditDeck from "./EditDeck";
import ViewDeck from "./ViewDeck";
import Study from "./Study.js";
import CreateDeck from "./CreateDeck";
import { useEffect, useState } from "react";

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});

  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then((data) => setCurrentDeck(data));
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study currentDeck={currentDeck} />
        </Route>

          <Route path="/decks/new">
          <CreateDeck />
        </Route>

        <Route path="/decks/:deckId">
          <ViewDeck currentDeck={currentDeck} />
        </Route>

        <Route path="/decks/:deckId/edit">
          <EditDeck currentDeck={currentDeck} />
        </Route>

      
      </Switch>
    </div>
  );
}

export default Deck;
