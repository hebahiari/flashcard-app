import { readCard, updateCard } from "../../../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";

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
      <CardForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newCard={newCard}
        history={history}
      />
    </div>
  );
}

export default EditCard;
