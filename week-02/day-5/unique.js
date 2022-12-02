// Hozz létre egy függvényt, ami kap egy számokból álló listát paraméterként
// Visszad egy számokból álló listát, ahol minden szám pontosan egyszer
// szerepel

export default function findUniqueItems(arr) {
  const newArray = [...new Set(arr)]
  return newArray
}

//  Példa

/* console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34])) */
//  ezt kéne kiírnia: `[1, 11, 34, 52, 61]`
