import React from "react"
import { useHistory } from "react-router-dom"

function EditCardButton({deckId, cardId}) {

    const history = useHistory();

return (
<button
type="button"
className="btn btn-secondary m-1"
onClick={() => history.push(`/decks/${deckId}/cards/${cardId}/edit`)}
>
Edit
</button> )

}

export default EditCardButton;