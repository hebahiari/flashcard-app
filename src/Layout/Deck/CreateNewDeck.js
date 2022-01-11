import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

function CreateNewDeck() {
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  const handleChange = (event) => {
    setNewDeck({ ...newDeck, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(newDeck).then(() => history.push(`/decks/`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

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
            value={newDeck.name}
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
            value={newDeck.description}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateNewDeck;
