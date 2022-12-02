import { sum, divide } from './math.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('divide 10 by 5', ()=>{
    expect(divide(10,5)).toBe(2)
})


