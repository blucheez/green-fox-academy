const fs = require('fs')

export default function countLines(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf8')
    const result = data.toString().split('\n').length
    /* console.log(result) */
    return result
  } catch (err) {
    if (err) {
      return 0
    }
  }
}
