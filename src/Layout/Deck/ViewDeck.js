import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  deleteDeck,
  deleteCard,
} from "../../utils/api";
import AddCardsButton from "../Buttons/AddCardsButton";
import EditDeckButton from "../Buttons/EditDeckButton";
import RenderCard from "./Cards/RenderCard";

function ViewDeck({ currentDeck }) {
  const history = useHistory();

  const cards = currentDeck.cards;

  const handleDeckDelete = (event) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(event.target.id).then(() => history.push("/"));
    }
  };

  if (!currentDeck.cards) {
    return <h3> Loading ... </h3>;
  }

  const cardsList = cards.map((card) => <RenderCard card={card} currentDeck={currentDeck} />);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentDeck.name}
          </li>
        </ol>
      </nav>

      <h5 className="card-title"> {currentDeck.name} </h5>
      <p className="card-text">{currentDeck.description}</p>

<EditDeckButton deckId={currentDeck.id} />

      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push(`/decks/${currentDeck.id}/study`)}
      >
        Study
      </button>

      <button
        id={currentDeck.id}
        type="button"
        className="btn btn-secondary m-1"
        onClick={handleDeckDelete}
      >
        Delete
      </button>

      <AddCardsButton deckId={currentDeck.id}/>

      <div>
        <br />
        <h3>Cards</h3>
        {cardsList.length > 0 ? cardsList : <h5>No cards to display</h5>}
      </div>
    </div>
  );
}

export default ViewDeck;
