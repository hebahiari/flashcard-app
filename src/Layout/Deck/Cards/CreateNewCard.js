import { createCard } from "../../../utils/api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import CardForm from "./CardForm";

function CreateNewCard({ currentDeck }) {
  const emptyCard = { front: "", back: "" }
  const [newCard, setNewCard] = useState(emptyCard);
  const history = useHistory();

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(currentDeck.id, newCard).then(() => setNewCard(emptyCard));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>

      <h1>{currentDeck.name}: Add Card</h1>
<CardForm handleSubmit={handleSubmit} handleChange={handleChange} newCard={newCard} history={history}/>
    </div>
  );
}

export default CreateNewCard;
