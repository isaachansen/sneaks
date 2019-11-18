require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static(`${__dirname}/../build`));

const {
  register,
  login,
  logout,
  userSession,
  updateEmail
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
app.put("/auth/update_email", updateEmail)

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
app.delete("/api/cart/:cart_id", deleteFromCart);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});


app.post("/auth/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_NAME,
    subject: "New Message",
    html: `<body>
         <h1>New Message</h1>
         <ul style='list-style-type: none; padding: 0px; font-size: 18px; color: #333; font-family: sans-serif;'>
             <li>Name: ${name}</li>
             <li>Email: ${email}</li>
             <li>Message: ${message}</li>
         </ul>
         <body>`
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("error occurs", err);
      res.end()
    } else {
      console.log("email sent");
      res.end()
    }
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`server live on port ${SERVER_PORT}`);
});
