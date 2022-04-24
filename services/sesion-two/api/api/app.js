
const express = require('express');
const v1 = require('./controllers/v1');

const app = express()


//port to place the application i choose 9000
const port = 9000
//Routes
app.use('/v1',v1);

//middlewares 
app.use(express.json());
//the server+
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})