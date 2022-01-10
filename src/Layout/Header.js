import React from "react";
import { useHistory, Link } from "react-router-dom"

function Header() {
  const history= useHistory();

  return (
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <Link to="/" className="display-4">Flashcard-o-matic</Link>
        <p className="lead">Discover The Flashcard Difference.</p>
      </div>
    </header>
  );
}

export default Header;
