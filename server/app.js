const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")))
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

app.listen(PORT, () =>
  console.log(`🌎 ==> API server now on port ${PORT}!`)
);


