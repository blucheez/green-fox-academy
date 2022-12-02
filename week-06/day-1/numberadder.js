const adder = (n) => {
    if (n < 2) {
        return 1
    } else {
        return n + adder(n-1)
    }
}

console.log(adder(6))