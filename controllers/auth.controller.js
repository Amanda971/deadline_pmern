const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
//const { signInErrors } = require("../utils/errors.utils");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// S'inscription
module.exports.signUp = async (req, res) => {
  //const { pseudo, email, password, prenom, nom, adresse, telephone } = req.body;

  try {
    const user = await UserModel.create(req.body);
    // const user = await UserModel.create({
    //   pseudo,
    //   email,
    //   password,
    //   prenom,
    //   nom,
    //   adresse,
    //   telephone,
    // });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};
// Se connecter
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json({ errors });
  }
};
// Se déconnecter
module.exports.logout = (req, res) => {
  res.cookie("token", "", { maxAge: 2000, httpOnly: true, sameSite: "strict" }); // secure : true
  res.status(200).json({ message: "utilisateur déconnecté" });
};
