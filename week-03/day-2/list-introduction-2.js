const TombA = ['Alma', 'Avokádó', 'Áfonya', 'Durian', 'Mangó']
const TombB = TombA.slice()

console.log(TombA.includes('Durian'))

TombB.splice(3, 1)
console.log(TombB)

TombA.splice(4,0,"Kivi")
console.log(TombA)

console.log(TombA.length)
console.log(TombB.length)

console.log(TombA.indexOf("Avokádó"))
console.log(TombB.indexOf("Durian"))

TombB.push("Dinnye", "Pamelo")
console.log(TombB)

console.log(TombA[2])