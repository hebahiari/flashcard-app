function ViewDeck({ currentDeck }) {
  console.log(currentDeck)
  return (
    <div>
      <h1>hello</h1>
      <h5> {currentDeck.name} </h5>
      <p> {currentDeck.description} </p>
    </div>
  );
}

export default ViewDeck;
