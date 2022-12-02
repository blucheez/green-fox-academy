const express = require('express')
const app = express()
const PORT = 3000

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs')

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  let queryName
  if (req.query.name) {
    queryName = req.query.name
  } else {
    queryName = 'Guest'
  }

  // jelenítse meg a `home.ejs`-t
  res.render('home', {
    name: queryName,
  })
})

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Az app a ${PORT}-s port-on fut.`)
})
