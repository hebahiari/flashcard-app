import React, { useEffect, useState } from "react";
import RenderDeck from "./RenderDeck";
import { listDecks } from "../../utils/api";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);

  return decks.map((deck) => <RenderDeck deck={deck} key={deck.id} />);
}

export default DeckList;
