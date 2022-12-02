const toBeReversed =
  ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna\
  eurt fo sgninaem eht fI"

const reverse = (input) => {
  const splitInput = input.split('')
  const revInput = splitInput.reverse()
  const joinInput = revInput.join('')
  return joinInput
}

console.log(reverse(toBeReversed))

module.exports = reverse
