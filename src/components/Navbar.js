import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Links = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/video">Video</Link>
      </li>
      <li>
        <Link to="/photo">Photography</Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Link to="/">
        <h1>
          Main
        </h1>
      </Link>
      <Fragment>{Links}</Fragment>
    </div>
  )
}
export default Navbar;