require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

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
const couponRoutes = require("./routes/coupon");

const port = process.env.PORT || 8888;

// Middleware
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// Create middleware for checking the JWT
// const checkJwt = auth({
//   // Validate the audience and the issuer
//   audience: process.env.AUTH0_API, 
//   issuerBaseURL:process.env.AUTH0_BASE_URL,
//   algorithms: [ 'RS256' ]
// });

console.log({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_BASE_URL}.well-known/jwks.json`
  }),
  // Validate the audience and the issuer
  audience: process.env.AUTH0_API, //replace with your API's audience, available at Dashboard > APIs
  issuer: process.env.AUTH0_BASE_URL,
  algorithms: [ 'RS256' ]
});

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_BASE_URL}.well-known/jwks.json`
  }),

  // Validate the audience and the issuer
  audience: process.env.AUTH0_API, //replace with your API's audience, available at Dashboard > APIs
  issuer: process.env.AUTH0_BASE_URL,
  algorithms: [ 'RS256' ]
});

// Routes
app.use('/api/cart', extrasRoutes);
app.use('/api/profile', profileRoutes);
// app.use('/api/profile', checkJwt, profileRoutes);
app.use('/api/menu', dishesRoutes);
app.use('/api/sales', orderLinesRoutes);
app.use('/api/recipts', reciptsRoutes);
app.use('/api/tickets', ticketRoutes);
app.use("/api/products", productRoutes);
app.use("/api/coupon", couponRoutes);


// Function defined for logging requests [DEBUGGING]
app.use( (req, res, next) => {
  console.log(req.path, req.method);
  next();  
});

app.get('/', (req, res) => {
  res.send('APP IS RUNNING.');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

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
