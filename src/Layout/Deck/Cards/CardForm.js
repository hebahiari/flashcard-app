import React from "react";

function CardForm({handleChange, handleSubmit, newCard, history}){

return(
<form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            onChange={handleChange}
            value={newCard.front}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            onChange={handleChange}
            value={newCard.back}
          />
        </div>
      <button className="btn btn-secondary m-1" onClick={() => history.go("/")}>
          Done
        </button>
        <button type="submit" className="btn btn-primary m-1">
          Save
        </button>
      </form>
)
}

export default CardForm;