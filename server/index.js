require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

app.use(express.static(__dirname + "/../build"));

const { register, login, logout, userSession } = require('./controller/userController');

const { getInventory, getSingleItem } = require("./controller/InventoryController")

const {getCart, addToCart} = require("./controller/cartController");

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
  app.set('db', db);
});

app.post('/auth/register', register)
app.post('/auth/login', login)
app.get('/auth/user_session', userSession)
app.delete('/auth/logout', logout)

app.get('/api/inventory', getInventory);
app.get('/api/inventory/:id',getSingleItem);

app.get('/api/inventory/nike',  (req, res) => {
  const db = req.app.get("db");
  db.get_nike().then(inventory => {
    res.status(200).send(inventory);

  })
});

app.get('/api/cart/:id', getCart);
app.post('/api/add_to_cart', addToCart)

app.listen(SERVER_PORT, () => {
  console.log(`server live on port ${SERVER_PORT}`);
});
