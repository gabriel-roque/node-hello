const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  return res.send({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})