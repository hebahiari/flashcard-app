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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Study({ currentDeck }) {
  const [cardIndex, setCardIndex] = useState(0);
//   const [currentCard, setCurrentCard] = useState({});
  const [front, setFront] = useState(true);

 
  if (!currentDeck.cards) {
    return <h3>Loading . . .</h3>;
  }

 const cards = currentDeck.cards;
  console.log(cards.length);

  const nextButton = (
    <button
      type="button"
      className="btn btn-secondary m-1"
      onClick={() => { if (cardIndex !== cards.length) {
        setCardIndex((currentIndex) => currentIndex + 1);
        setFront(true); }
        else {
            console.log("not enough")
        }
      }}
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
            <Link to="/">{cards[cardIndex].name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>

      <h1>Study: {cards[cardIndex].name}</h1>

      <div className="card" style={{ width: "40rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card {cards[cardIndex].id} of {cards.length}</h5>
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
    </div>
  );
}

export default Study;
