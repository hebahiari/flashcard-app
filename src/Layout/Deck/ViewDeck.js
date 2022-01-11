import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddCardsButton from "../Buttons/AddCardsButton";
import EditDeckButton from "../Buttons/EditDeckButton";
import DeleteDeckButton from "../Buttons/DeleteDeckButton";
import StudyButton from "../Buttons/StudyButton";
import RenderCard from "./Cards/RenderCard";

function ViewDeck({ currentDeck }) {
  const history = useHistory();

  const cards = currentDeck.cards;

  if (!currentDeck.cards) {
    return <h3> Loading ... </h3>;
  }

  const cardsList = cards.map((card) => (
    <RenderCard card={card} currentDeck={currentDeck} key={card.id} />
  ));

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

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-9">
            {" "}
            <EditDeckButton deckId={currentDeck.id} />
            <StudyButton deckId={currentDeck.id} history={history} />
            <AddCardsButton deckId={currentDeck.id} />
          </div>
          <div className="col-3">
            <DeleteDeckButton deckId={currentDeck.id} />
          </div>
        </div>
      </div>

      <div>
        <br />
        <h3>Cards</h3>
        {cardsList.length > 0 ? cardsList : <h5>No cards to display</h5>}
      </div>
    </div>
  );
}

export default ViewDeck;
