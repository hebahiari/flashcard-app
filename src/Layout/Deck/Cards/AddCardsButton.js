import { useHistory, useRouteMatch } from "react-router-dom"
import React from "react"


function AddCardsButton() {

const history = useHistory();
const { url } = useRouteMatch();

return(
<button
        type="button"
        className="btn btn-secondary m-1"
        onClick={() => history.push(`${url}/cards/new`)}>Add Cards
      </button>
)

    
}

export default AddCardsButton