import { createCard } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

function CreateNewDeck() {
  const [newCard, setNewCard] = useState({ front: "", back: "" });
  const history = useHistory();

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(newCard, DeckId).then(() => history.push(`/decks/`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Card
          </li>
        </ol>
      </nav>

      <h1>Create Card</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={newCard.front}
          />
        </div>
        <div className="mb-3">
          <label for="desciption" className="form-label">
            Desciption
          </label>
          <textarea
            className="form-control"
            id="desciption"
            name="description"
            onChange={handleChange}
            value={newCard.back}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button className="btn btn-primary" onClick={()=> history.go("/")}>
          Done
        </button>
      </form>
    </div>
  );
}

export default CreateNewDeck;
