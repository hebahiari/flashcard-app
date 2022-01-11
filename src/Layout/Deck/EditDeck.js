import { updateDeck, readDeck } from "../../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DeckForm from "./DeckForm";

function EditDeck({ currentDeck }) {
  const { deckId } = useParams();
  const history = useHistory();
  const [newDeck, setNewDeck] = useState({
    name: "",
    description: "",
    id: deckId,
  });

  useEffect(() => {
    readDeck(deckId).then((data) => setNewDeck(data));
  }, [deckId]);

  const handleChange = (event) => {
    setNewDeck({ ...newDeck, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck(newDeck).then(() => history.push(`/decks/`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>

      <h1>Edit Deck</h1>
      <DeckForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newDeck={newDeck}
        history={history}
      />
    </div>
  );
}

export default EditDeck;
