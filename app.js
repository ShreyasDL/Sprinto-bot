const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const policyRoute = require('./routes/policy-routes')
const customerRoute = require('./routes/customer-route')
const app = express()

app.use(bodyParser.json());

app.use('/api/policies',policyRoute)

app.use('/api/customer',customerRoute)

const url =
  "ADD_YOUR_MONGODB_URL";

mongoose
  .connect(url)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });