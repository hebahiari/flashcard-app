import React from "react";

function StudyButton({ deckId, history }) {
  return (
    <button
      type="button"
      className="btn btn-primary m-1"
      onClick={() => history.push(`/decks/${deckId}/study`)}
    >
      Study
    </button>
  );
}

export default StudyButton;
