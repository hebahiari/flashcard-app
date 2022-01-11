import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function DeleteCardButton({cardId}) {
  const history = useHistory();

  const handleCardDelete = (event) => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      deleteCard(event.target.id).then(() => history.go());
    }
  };

  return (
    <button
      id={cardId}
      type="button"
      className="btn btn-danger text-end m-1"
      onClick={handleCardDelete}
    >
      Delete
    </button>
  );
}

export default DeleteCardButton;
