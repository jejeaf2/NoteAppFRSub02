import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiHomeSmile, BiPlusCircle, BiLogOut } from "react-icons/bi";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <BiHomeSmile />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <BiPlusCircle />
          </Link>
        </li>
        <li>
          <button onClick={logout}>
            {name} <BiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
