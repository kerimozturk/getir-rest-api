const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const record= require('../routes/record'); // Link to your server file
const supertest = require('supertest');
const request = supertest(record);

it("Gets the test endpoint", async done => {
  // Sends GET Request to /test endpoint
  const res = await request.get("/");

  // ...
  done();
});
