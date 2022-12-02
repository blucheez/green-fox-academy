'use strict'

// Írj egy programot, ami 1-től 100-ig kiíratja a számokat.
// De a 3 többszörösei esetén a "Fizz" szót írja ki a szám helyett
// és az 5 többszöröseinél pedig a "Buzz" szót írja ki a szám helyett.
// Ha a szám a 3-nak és 5-nek is többszöröse,
// akkor a "FizzBuzz" szót írja ki a szám helyett

export default function fizzBuzz() {
  // írd ide a kódodat a Gradescope teszthez
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else {
      console.log(i)
    }
  }
}
