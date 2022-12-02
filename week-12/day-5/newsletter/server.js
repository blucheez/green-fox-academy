const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.post('/signup', (req, res) => {
  console.log(req.body)
  res.send(
    `<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`
  )
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
