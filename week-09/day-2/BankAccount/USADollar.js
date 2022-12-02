import Currency from './Currency.js'

export default class USADollar extends Currency {
  code = 'USD'
  centralBank = 'Federal Reserve System'

  constructor(value) {
    super(value)
  }
}
