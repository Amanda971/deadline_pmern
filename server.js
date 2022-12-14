//Les chemins de connexion
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");

const app = express();

//Body-parser permet la lecture et le traitement des rêquetes HTTP
//cookie-parser lire le cookie

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes
app.use("/api/user", userRoutes);

//Serveur
app.listen(5000, () => {
  console.log("Attente des requête au port 5000");
});
