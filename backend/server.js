require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

// const
const reciptsRoutes = require('./routes/recipts');

const app = express();
const port = process.env.PORT || 8888;

// Middleware
app.use(express.json());

// Routes
app.use('./api/recipts', reciptsRoutes)

// Test routes
// app.get("/", (req, res) => {
//   res.send("Hello");
// })

app.get('/api', function (req, res) {
  res.json({ message: `YOUR EXPRESS BACKEND IS CONNECTED TO REACT`});
})

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(port, () => {
      console.log('Connected to mongodb & listening on port', port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
