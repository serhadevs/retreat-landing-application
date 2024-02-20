const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const patronsRoutes = require("./routes/patronsRoutes");
const confirmPatron = require("./controllers/confirmation");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/patrons", patronsRoutes);

app.use("/confirmation/:invitees_ref", confirmPatron);

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.join(__dirname, '../frontEnd/dist')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontEnd', 'dist', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(8082, () => {
  console.log("Listening");
});
