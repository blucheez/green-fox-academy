// Készíts egy függvényt decryptDoubled() neven, ami fogad egy fájlnevet stringként
// és dekódolja a duplicated-chars.txt tartalmát
// Ha a fájl nem található meg adja vissza ezt a szöveget: File not found
// A dekódolás eredménye az output.txt fájlba legyen elmentve

const fs = require('fs')

export const decryptDoubled = (fileName) => {
  let data
  try {
    data = fs.readFileSync(fileName, 'utf-8', error)
    const output = removeDuplicates(data)
    fs.writeFileSync('output.txt', output)
  } catch (err) {
    if (err) {
      return 'File not found'
    }
  }
}

const removeDuplicates = (s) => {
  let n = s.length
  let str = ''
  if (n === 0) {
    return str
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] !== s[i + 1] || s[i + 1] === s[i + 3]) {
      str += s[i]
    }
  }
  str += s[n - 1]
  return str
}

/* module.exports = { decryptDoubled } */
