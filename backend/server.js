require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')

const extrasRoutes = require('./routes/extras');
const dishesRoutes = require('./routes/dishes');

const app = express();
const port = process.env.PORT || 8888;

// Middleware
app.use(express.json());

// Routes
app.use('/api/cart', extrasRoutes);
app.use('/api/menu', dishesRoutes);

// Test routes
// app.get("/", (req, res) => {
//   res.send("Hello");
// })

app.get('/api', function (req, res) {
  res.json({ message: `YOUR EXPRESS BACKEND IS CONNECTED TO REACT`});
})

// Connect to db
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for requests
    app.listen(port, () => {
      console.log('Connected to mongodb & listening on port', port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
