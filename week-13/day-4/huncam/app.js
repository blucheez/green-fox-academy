const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('assets'))
app.use(express.json())

app.post('/translate', (req, res) => {
  let resultObj = {}
  const text = req.body.text
  const lang = req.body.lang

  if (!text || !lang || (!text && !lang)) {
    resultObj.error = 'Ezt nem tudom lefordítani!'
  } else {
    const vowels = [
      'a',
      'á',
      'e',
      'é',
      'i',
      'í',
      'o',
      'ó',
      'ö',
      'ő',
      'u',
      'ú',
      'ü',
      'ű',
    ]
    const splitArr = text.split('')
    const modifiedArr = splitArr.map((word) => {
      for (char of word) {
        if (vowels.includes(char.toLowerCase())) {
          const charIndex = word.indexOf(char)
          const newWord = [
            word.slice(0, charIndex + 1),
            'v',
            word.slice(charIndex).toLowerCase(),
          ]
          word = newWord.join('')
        }
      }
      return word
    })
    const result = modifiedArr.join('')

    resultObj.translated = result
    resultObj.lang = 'teve'
  }
  res.json(resultObj)
})

app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT} csatornán.`)
})
