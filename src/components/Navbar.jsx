import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Crappy Ghibli Wiki &#8482;</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="/" class="nav-item nav-link" href="#">Home</Link>
      <Link to="/films" class="nav-item nav-link" href="#">Films</Link>
      <Link to="/people" class="nav-item nav-link" href="#">People</Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar;