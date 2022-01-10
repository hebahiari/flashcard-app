import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, createDeck, readDeck, updateDeck, deleteDeck, createCard, readCard, updateCard, deleteCard} from "../utils/api"


function Home() {
const [decks, setDecks] = useState([]);
const [cards, setCards] = useState([]);
  const history = useHistory();


  const handleDelete = (event) => {
    console.log(event.target)
    if (window.confirm("Delete this deck? You will not be able to recover it.")) {
    deleteDeck(event.target.id).then(() => history.go(0))}
  }

  useEffect(() => {

listDecks().then((data) => setDecks(data))

  },[])


  const deckList= decks.map((deck)=> {
    return (  
    
    <div className="card my-3" style={{ width: "40rem" }}>
    <div className="card-body">
      <h5 className="card-title"> {deck.name} </h5>
      <p className="card-text">
     {deck.cards.length} Cards
      </p>
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
        id={deck.id}
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
