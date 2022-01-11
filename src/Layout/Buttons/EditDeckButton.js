import React from "react"
import { useHistory } from "react-router-dom"

function EditDeckButton({deckId}) {

    const history = useHistory();

return (
<button
type="button"
className="btn btn-secondary m-1"
onClick={() => history.push(`/decks/${deckId}/edit`)}
>
Edit
</button> )

}

export default EditDeckButton;