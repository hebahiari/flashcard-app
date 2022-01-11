import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeleteDeckButton({ deckId
 }) {
  const history = useHistory();

  const handleDelete = (event) => {
    console.log(event.target);
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(event.target.id).then(() => history.go(0));
    }
  };

  return (
    <button
      id={deckId}
      type="button"
      className="btn btn-secondary m-1"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteDeckButton;
