const powerN = (base, n) => {
  if (n === 0) {
    return 1
  } else {
    return base * powerN(base, n - 1)
  }
}

console.log(powerN(4, 2))
