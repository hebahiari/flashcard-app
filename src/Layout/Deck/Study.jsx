import {
  listDecks,
  createDeck,
  readDeck,
  updateDeck,
  deleteDeck,
  createCard,
  readCard,
  updateCard,
  deleteCard,
} from "../../utils/api";
import AddCardsButton from "../Buttons/AddCardsButton";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Study({ currentDeck }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [front, setFront] = useState(true);
  const cards = currentDeck.cards;

const history = useHistory();

  if (!currentDeck.cards) {
    return <h3>Loading . . .</h3>;
  }

  const nextButton = (
    <button
      type="button"
      className="btn btn-secondary m-1"
      onClick={() => {
        if (cardIndex+1 < cards.length) {
          setCardIndex((currentIndex) => currentIndex + 1);
          setFront(true);
        } else {
          if (window.confirm("Restart Cards? Click Cancel to go to the Home page")) {
            history.go()
          } else {
            history.push("/")
          }
        }
      }
    }
    >
      Next
    </button>
  );

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>

      <h1>Study: {currentDeck.name}</h1>

      {currentDeck.cards.length < 3 ? (
        <span>
          <h3>Not enough cards</h3>
          <h5>
            You need at least 3 cards to study. there are{" "}
            {currentDeck.cards.length} in this deck.
          </h5>
          <AddCardsButton />
        </span>
      ) : (
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Card {cardIndex + 1} of {cards.length}
            </h5>
            <p className="card-text">
              {front ? cards[cardIndex].front : cards[cardIndex].back}
            </p>
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => setFront((currentside) => !currentside)}
            >
              Flip
            </button>
            {front ? null : nextButton}
          </div>
        </div>
      )}
    </div>
  );
}

export default Study;
