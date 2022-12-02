const fs = require('fs')

let fileContent
try {
  fileContent = fs.readFileSync('my-file.txt', 'utf8')
} catch (err) {
  console.error(`Unable to read file: my-file.txt: ${err}`)
}
console.log(fileContent)
