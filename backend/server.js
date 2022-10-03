require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

// const
const reciptsRoutes = require('./routes/recipts')
const ticketRoutes = require('./routes/tickets')

const app = express()
const port = process.env.PORT || 8888;

// Middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/recipts', reciptsRoutes)
app.use('/api/tickets', ticketRoutes)

// Test routes
// app.get("/", (req, res) => {
//   res.send("Hello");
// })

//app.get('/api', function (req, res) {
//  res.json({ message: `YOUR EXPRESS BACKEND IS CONNECTED TO REACT`});
//})

// Connect to db
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

