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

function CreateDeck() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="desciption" class="form-label">
            Desciption
          </label>
          <input type="text" class="form-control" id="desciption" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
