require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const { auth } = require('express-oauth2-jwt-bearer');
// const jwt = require('express-jwt');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const extrasRoutes = require('./routes/extras');
const profileRoutes = require('./routes/profile');
const dishesRoutes = require('./routes/dishes');
const orderLinesRoutes = require('./routes/orderLines');
const reciptsRoutes = require('./routes/recipts')
const ticketRoutes = require('./routes/tickets')
const productRoutes = require("./routes/products");

const port = process.env.PORT || 8888;

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*'
}));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_BASE_URL}.well-known/jwks.json`
  }),
  // Validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_BASE_URL,
  algorithms: [ 'RS256' ]
});

// Middleware for checking the permissions
const checkPermissions = (permissions) => {
  
}

// Public Routes
app.use('/api/cart', extrasRoutes);
app.use('/api/menu', dishesRoutes);
app.use('/api/recipts', reciptsRoutes)



// Protected Routes
app.use('/api/profile', checkJwt, profileRoutes);
app.use("/api/products",checkJwt, productRoutes);
app.use('/api/sales', checkJwt, orderLinesRoutes);
app.use('/api/tickets', checkJwt, ticketRoutes)

// Function defined for logging requests [DEBUGGING]
app.use( (req, res, next) => {
  console.log(req.path, req.method);
  next();  
})

// app.get('/api', function (req, res) {
//   res.json({ message: `YOUR EXPRESS BACKEND IS CONNECTED TO REACT`});
// })

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
