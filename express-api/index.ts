import express from 'express';

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(401).json({
      ok: 'false',
      msg: 'No hay toke en la petición'
  })
//   res.json({
//       ok:true,
//       msg: 'Todo Salio bien!'
//   })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})