const express = require('express')
const app = express()
const PORT = 3000
const coctails = require('./coctails')

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const alcoholList = ['gin', 'vodka', 'rum', 'tequila']

  let coctailList = []
  if (req.query.alcohol) {
    const filteredArr = coctails.filter((coctail) => {
      if (coctail.contains.includes(req.query.alcohol)) {
        return coctail
      }
    })
    coctailList = filteredArr
  } else {
    coctailList = coctails
  }
  // jelenítse meg a `home.ejs`-t
  res.render('home', {
    alcoholList,
    coctailList,
  })
})

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Az app a ${PORT}-s port-on fut.`)
})
