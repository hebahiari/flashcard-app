import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, createDeck, readDeck, updateDeck, deleteDeck, createCard, readCard, updateCard, deleteCard} from "../utils/api"


function Home() {
const [decks, setDecks] = useState([]);
const [cards, setCards] = useState([]);
  const history = useHistory();


  const handleDelete = () => {
    console.log('deleted')
  }

  useEffect(() => {

listDecks().then((data) => setDecks(data)).then(()=> console.log(decks))

  },[])


  const deckList= decks.map((deck)=> {
    return (  
    
    <div className="card" style={{ width: "40rem" }}>
    <div className="card-body">
      <h5 className="card-title"> {deck.name} </h5>
      <p className="card-text">
     {deck.description}
      </p>

      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push(`/decks/${deck.id}/study`)}>Study
      </button>
      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push(`/decks/${deck.id}`)}>View
      </button>


      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={handleDelete}>Delete
      </button>
    </div>
  </div> )
  })

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push("/decks/new")}>Create Deck
      </button>
      {deckList}
    </div>
  );
}

export default Home;
