const sum = (n) => {
  if (n === 0) {
    return n
  } else {
    return n % 10 + sum(parseInt(n/10))
  }
}


console.log(sum(12345));