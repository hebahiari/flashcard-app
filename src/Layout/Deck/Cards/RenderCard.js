import React from "react";
import DeleteCardButton from "../../Buttons/DeleteCardButton";
import EditCardButton from "../../Buttons/EditCardButton";

function RenderCard({ card, currentDeck }) {
  return (
    <div className="card my-3" style={{ width: "40rem" }}>
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-1">
              <EditCardButton deckId={currentDeck.id} cardId={card.id} />
            </div>
            <div className="col-2">
              <DeleteCardButton cardId={card.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderCard;
