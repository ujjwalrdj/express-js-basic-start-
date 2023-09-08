const express = require("express");

const app = express();
const path = require("path");
const userRoutes = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Welcome to Wrong page</h1>");
});

app.listen(3000);
