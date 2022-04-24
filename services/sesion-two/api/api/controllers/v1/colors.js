const express = require('express');
const data = require('./data.json');
const colors =data.colors;

const router =express.Router();

router.get('/', (req, res) => 
{
  res.send(colors)
})
router.post('/', (req, res) => 
{
  res.send(colors)
})

router.get('/:id', (req,res)=> {
  const id =req.params.id;
  const color = colors.find(color => color.id === id );
  res.send(color);
})



module.exports = router; 
