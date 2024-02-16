const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const patronsRoutes = require("./routes/patronsRoutes");
const confirmPatron = require("./controllers/confirmation");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/patrons", patronsRoutes);

app.use("/confirmation/:invitees_ref", confirmPatron);

app.listen(8082, () => {
  console.log("Listening");
});
