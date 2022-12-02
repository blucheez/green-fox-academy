import Currency from './Currency.js'

export default class HungarianForint extends Currency {
  code = 'HUF'
  centralBank = 'Hungarian National Bank'
  constructor(value) {
    super(value)
  }
}
