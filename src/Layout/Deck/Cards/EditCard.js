import { readCard, updateCard } from "../../../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function EditCard({ currentDeck }) {
  const { cardId } = useParams();

  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
    id: currentDeck.id,
  });
  const history = useHistory();

  useEffect(() => {
    readCard(cardId).then((data) => setNewCard(data));
  }, []);

  const handleChange = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(newCard).then(() => history.push(`/decks/${currentDeck.id}`));
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
            Edit Card
          </li>
        </ol>
      </nav>

      <h1>Edit Card</h1>

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

export default EditCard;
