require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

app.use(express.static(`${__dirname}/../build`));

const {
  register,
  login,
  logout,
  userSession
} = require("./controller/userController");

const {
  getInventory,
  getSingleItem,
  getNikeItem,
  getVansItem,
  getAdidasItem,
  getConverseItem,
  getAirJordanItem,
  getOtherItem,
} = require("./controller/InventoryController");

const { getCart, addToCart, deleteFromCart} = require("./controller/cartController");

let { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1209600000
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  console.log("database connected");
  app.set("db", db);
});

app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user_session", userSession);
app.delete("/auth/logout", logout);

app.get("/api/inventory", getInventory);
app.get("/api/inventory/:id", getSingleItem);

app.get("/api/nike", getNikeItem);
app.get("/api/vans", getVansItem);
app.get("/api/converse", getConverseItem);
app.get("/api/adidas", getAdidasItem);
app.get("/api/air_jordan", getAirJordanItem);
app.get("/api/other", getOtherItem);

app.get("/api/cart/:id", getCart);
app.post("/api/add_to_cart", addToCart);
app.delete("/api/cart/:id", deleteFromCart);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => {
  console.log(`server live on port ${SERVER_PORT}`);
});
