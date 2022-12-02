'use strict'

// Egy átlagos Green Fox hallgató 6 órát kódol naponta
// Egy félév hosszúsága 17 hét
//
// Írd ki, hány órát tölt kódolással egy hallgató egy félév során,
// ha a hallgató csak hétköznap kódol
//
// Írd ki, hogy a félév hány százalékát tölti a hallgató kódolással
// ha az átlagos heti munkaidő 52 óra

const avg = 6
const weekdays = 5
const weeks = 17

const codingHours = weeks * weekdays * avg
console.log(`Egy hallgató ${codingHours} órát tölt kódolással egy félév során.`)

const avgWorkTime = 52
const percentage = (codingHours / (avgWorkTime * weeks)) * 100
console.log(`A félév ${percentage.toFixed(2)} %-át tölti a hallgató kódolással.`)
