import React from "react"
import { useHistory } from "react-router-dom"
import { deleteCard } from "../../../utils/api";
import EditCardButton from "../../Buttons/EditCardButton";

function RenderCard({card, currentDeck}) {

  const history = useHistory();

  const handleCardDelete = (event) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(event.target.id).then(() => history.go());
    }
  };

  return (
    <div className="card my-3" style={{ width: "40rem" }}>
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>

<EditCardButton deckId={currentDeck.id} cardId={card.id}/>

        <button
          id={card.id}
          type="button"
          className="btn btn-secondary m-1"
          onClick={handleCardDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default RenderCard;