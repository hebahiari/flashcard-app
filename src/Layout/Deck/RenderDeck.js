import React from "react";
import DeleteDeckButton from "../Buttons/DeleteDeckButton";
import ViewDeckButton from "../Buttons/ViewDeckButton";
import { useHistory } from "react-router-dom";

function RenderDeck({deck}) {
    const history = useHistory();
    
    return (
        <div className="card my-3" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5 className="card-title"> {deck.name} </h5>
            <p className="card-text">{deck.cards.length} cards</p>
            <p className="card-text"> {deck.description} </p>
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => history.push(`/decks/${deck.id}/study`)}
            >
              Study
            </button>
            <ViewDeckButton deckId={deck.id} />
            <DeleteDeckButton deckId={deck.id}/>
          </div>
        </div>)
}

export default RenderDeck