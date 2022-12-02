/* Készíts egy függvényt multiplyMatrixItems néven, ami 
bemenetként egy egész számokat tartalmazó mátrixot (kétdimenziós tömb) kap, és
minden, páratlan indexű sorban található páros számot megszoroz 2-vel, és
visszatér a módosított mátrixszal. */

function multiplyMatrixItems(arr, multiplier) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 === 1 && arr[i][j] % 2 === 0) {
        arr[i][j] *= multiplier
      }
    }
  }
  return arr
}

console.log(
  multiplyMatrixItems(
    [
      [1, 3, 6, 2],
      [4, 5, 6, 1],
      [3, 3, 1, 5],
      [9, 0, 5, 2],
    ],
    10
  )
)
