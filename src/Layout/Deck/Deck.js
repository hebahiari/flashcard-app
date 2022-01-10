import { Switch, Route, useParams } from "react-router-dom";
import {
  readDeck,
} from "../../utils/api";
import EditDeck from "./EditDeck";
import ViewDeck from "./ViewDeck";
import Study from "./Study.js";
import CreateNewDeck from "./CreateDeck";
import { useEffect, useState } from "react";

function Deck() {
  const [currentDeck, setCurrentDeck] = useState({});

  const { deckId } = useParams();

  useEffect(() => {
    if (!deckId === "new") {
    readDeck(deckId).then((data) => setCurrentDeck(data));
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study currentDeck={currentDeck} />
        </Route>

          <Route path="/decks/new">
          <CreateNewDeck />
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
