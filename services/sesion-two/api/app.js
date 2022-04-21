const express = require('express');
const v1 = require('./controllers/v1');

const app = express()
//port to place the application
const port = 9001
//Routes
app.use('v1',v1);

//middlewares 
app.use(express.json());


//the server+
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})