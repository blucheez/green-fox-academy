const express = require('express')
const path = require('path')

const app = express()
const PORT = 8080

app.use(express.static('assets'))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.hu.html'))
})

app.get('/doubling', (req, res) => {
  let doubingRes = {}
  if (!req.query.input) {
    doubingRes.error = 'Please provide an input!'
  } else {
    doubingRes.received = Number(req.query.input)
    doubingRes.result = doubingRes.received * 2
  }
  res.json(doubingRes)
})

app.get('/greeter', (req, res) => {
  let greeterRes = {}
  if (!req.query.name && !req.query.title) {
    greeterRes.error = 'Please provide a name and a title!'
    res.status(400)
  } else if (!req.query.name && req.query.title) {
    greeterRes.error = 'Please provide a name!'
    res.status(400)
  } else if (req.query.name && !req.query.title) {
    greeterRes.error = 'Please provide a title!'
    res.status(400)
  } else {
    greeterRes.welcome_message = `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
  }
  res.json(greeterRes)
})

app.get('/appenda/:appendable', (req, res) => {
  let appendRes = {}
  if (!req.params.appendable) {
    res.status(404)
  } else {
    appendRes.appended = req.params.appendable + 'a'
  }
  res.json(appendRes)
})

app.post('/dountil/:action', (req, res) => {
  let doUntilRes = {}
  const until = req.body.until
  if (!req.params.action) {
    doUntilRes.error = 'Please provide a number!'
  } else if (req.params.action === 'sum') {
    let counter = 0
    for (let i = 0; i <= until; i++) {
      counter += i
    }
    doUntilRes.result = counter
  } else if (req.params.action === 'factor') {
    let counter = 1
    for (let i = until; i > 0; i--) {
      counter *= i
    }
    doUntilRes.result = counter
  }
  res.json(doUntilRes)
})

app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT} csatornán.`)
})
