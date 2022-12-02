const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('assets'))
app.use(express.json())

app.post('/arrays', (req, res) => {
  let resultObj = {}
  const what = req.body.what
  const numbers = req.body.numbers
  if (!numbers) {
    resultObj.error = 'Kérem, adja meg a számokat!'
  } else if (!what) {
    resultObj.error = 'Kérem, adja meg a műveletet!'
  } else if (what !== 'sum' && what !== 'multiply' && what !== 'double') {
    resultObj.error = 'Nem definiált művelet!'
  } else if (what === 'sum') {
    let acc = 0
    for (let i = 0; i < numbers.length; i++) {
      acc += numbers[i]
    }
    resultObj.result = acc
  } else if (what === 'multiply') {
    let acc = 1
    for (let i = 0; i < numbers.length; i++) {
      acc *= numbers[i]
    }
    resultObj.result = acc
  } else if (what === 'double') {
    const doubleArr = numbers.map((n) => n * 2)
    resultObj.result = doubleArr
  }
  res.json(resultObj)
})

app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT} csatornán.`)
})
