const express = require('express')
const app = express()
const PORT = 3000
const forecasts = require('./forecasts')

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // jelenítse meg a `home.ejs`-t
  res.render('dashboard', { forecasts })
})

app.get('/cities/:city', (req, res) => {
  const cityParam = req.params.city
  const cityForecast = forecasts.filter((city)=>{
    if(city.city === cityParam){
      return city
    }
  })
  // jelenítse meg a `home.ejs`-t
  res.render('details', {cityForecast})
})

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Az app a ${PORT}-s port-on fut.`)
})
