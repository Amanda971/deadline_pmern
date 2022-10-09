const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Voir tous les utilisateur
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};
// Voir un utilisateur
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  // Stocker la data
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

//modifier ou ajouter
module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Id unknown " + req.params.id);
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          adresse: req.body.adresse,
          email: req.body.email,
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((docs) => {
        return res.send(docs);
      })
      .catch((err) => {
        return res.status(500).send({ message: err });
      });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
