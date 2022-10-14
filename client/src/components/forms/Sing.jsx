import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sing = () => {
  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="prenom">Prénom</label>
        <input required type="prenom" id="prenom" />
      </div>

      <div className="form-group">
        <label htmlFor="nom">Nom</label>
        <input required type="nom" id="nom" />
      </div>

      <div className="form-group">
        <label htmlFor="pseudo">Pseudo</label>
        <input required type="pseudo" id="pseudo" />
      </div>

      <div className="form-group">
        <label htmlFor="passeword">Password</label>
        <input required type="passeword" id="password" />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input required type="email" id="email" />
      </div>

      <div className="form-group">
        <label htmlFor="adresse">Adresse</label>
        <input required type="adresse" id="adresse" />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Télèphone</label>
        <input required type="telephone" id="telephone" />
      </div>
      <div className="form-btn">
        <button>
          <FontAwesomeIcon icon={faStar} />
          Valider
        </button>
      </div>
      <div className="form-footer">
        <Link to="/login">J'ai déja un compte ?</Link>
      </div>
    </div>
  );
};

export default Sing;
