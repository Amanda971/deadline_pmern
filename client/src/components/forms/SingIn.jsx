import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const SingIn = () => {
  return (
    <div className="form-row">
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-btn">
            <button>
              <FontAwesomeIcon icon={faIdCard} />
              Connexion
            </button>
          </div>
          <div className="form-footer">
            <Link to="/register">Pas encore de compte ? cliquez ici</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
