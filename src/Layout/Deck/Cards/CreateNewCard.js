import { createCard } from "../../../utils/api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

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
            Create Card
          </li>
        </ol>
      </nav>

      <h1>Create Card</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="front" className="form-label">
            Front
          </label>
          <input
            type="text"
            className="form-control"
            id="front"
            name="front"
            onChange={handleChange}
            value={newCard.front}
          />
        </div>
        <div className="mb-3">
          <label for="back" className="form-label">
            Back
          </label>
          <input
          type="text"
            className="form-control"
            id="back"
            name="back"
            onChange={handleChange}
            value={newCard.back}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button className="btn btn-primary" onClick={() => history.go("/")}>
          Done
        </button>
      </form>
    </div>
  );
}

export default CreateNewCard;
