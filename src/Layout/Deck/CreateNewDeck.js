import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import DeckForm from "./DeckForm";

function CreateNewDeck() {
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  const handleChange = (event) => {
    setNewDeck({ ...newDeck, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(newDeck).then(() => history.push(`/`));
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
      <DeckForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newDeck={newDeck}
        history={history}
      />
    </div>
  );
}

export default CreateNewDeck;
