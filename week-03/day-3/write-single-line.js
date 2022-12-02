const fs = require('fs')

/* const fileContent = 'Petre István' */

const writeOneLine = (fileContent) => {
  try {
    fs.writeFileSync('single-line.txt', fileContent)
  } catch (error) {
    console.log('Unable to write file: single-line.txt')
  }
}

module.exports = {writeOneLine}