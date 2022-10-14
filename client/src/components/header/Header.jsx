import React from "react";
import { Link } from "react-router-dom";
import "../../pages/home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="header-row">
      <div className="header-top"></div>
      <div className="header-nav">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/profil" activeClassName="active">
          Profil
        </Link>
        <Link to="/Login" activeClassName="active">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/" activeClassName="active">
          <FontAwesomeIcon icon={faShareFromSquare} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
