'use strict'

const currentHours = 14
const currentMinutes = 34
const currentSeconds = 42

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

const fullSeconds = 24 * 60 * 60
const currSec = currentHours * currentMinutes * currentSeconds

console.log(`${fullSeconds-currSec} másodperc van még hátra a napból!`)
