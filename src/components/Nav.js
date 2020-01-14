import React from "react";
import { Link } from "react-router-dom";
// Links act like anchor tags, basically turns anything nested inside of the Link tag into a link, us to='/somePath' in tag to redirect to that path

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/Charecters">
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
