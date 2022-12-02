const allRadio = document.querySelectorAll('input[type="radio"]')
const subButton = document.querySelector('.sub')
const loveCatsButton = document.querySelector('.lovecats')
console.log(allRadio)

const dog = document.getElementById('kutya')
const cat = document.getElementById('cica')
const goldfish = document.getElementById('aranyhal')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
for (let button of allRadio) {
  button.onchange = () => {
    if (dog.checked || cat.checked) {
      subButton.disabled = false
      if (cat.checked && yes.checked) {
        loveCatsButton.disabled = false
      } else {
        loveCatsButton.disabled = true
      }
    } else if (goldfish.checked && no.checked) {
      subButton.disabled = false
      subButton.onclick = () => {
        window.alert(
          'Upsz, mégis felvettünk a macskákkal kapcsolatos hírlevelünkre'
        )
      }
    } else {
      subButton.disabled = true
      loveCatsButton.disabled = true
    }
  }
}

loveCatsButton.onclick = (e) => {
  e.preventDefault()
  window.alert(
    'Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre'
  )
}

subButton.onclick = (e) => {
  e.preventDefault()
  window.alert(
    'Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre'
  )
}
