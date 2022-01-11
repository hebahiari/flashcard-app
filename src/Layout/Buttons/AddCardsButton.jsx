import { useHistory } from "react-router-dom";
import React from "react";

function AddCardsButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary m-1"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      Add Cards
    </button>
  );
}

export default AddCardsButton;
