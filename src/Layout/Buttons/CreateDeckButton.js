import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary m-1"
      onClick={() => history.push("/decks/new")}
    >
      Create Deck
    </button>
  );
}

export default CreateDeckButton;
