const mongoose = require("mongoose");

//connection à la base de données
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@clusterapi.qwu57ji.mongodb.net/test"
  )
  // Verification de connexion à MongoDB
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
