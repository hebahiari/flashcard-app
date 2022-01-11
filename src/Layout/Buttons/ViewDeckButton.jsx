import React from "react"
import { useHistory } from "react-router-dom"

function ViewDeckButton({deckId}) {

    const history = useHistory();

return (
<button
type="button"
className="btn btn-secondary m-1"
onClick={() => history.push(`/decks/${deckId}`)}
>
View
</button> )

}

export default ViewDeckButton;