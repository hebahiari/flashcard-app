import React from "react";

function DeckForm({handleChange, handleSubmit, newDeck, history}){

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            onChange={handleChange}
            value={newDeck.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desciption" className="form-label">
            Desciption
          </label>
          <textarea
            className="form-control"
            id="desciption"
            name="description"
            required
            onChange={handleChange}
            value={newDeck.description}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )

}
    export default DeckForm;