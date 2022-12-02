const server = 'http://localhost:8080/'
const nameElement = document.getElementById('name')

const getNames = async () => {
  const response = await fetch(server + 'users')
  const users = await response.json()

  users.users.forEach((user) => {
    const option = document.createElement('option')
    option.value = user.id
    option.textContent = user.name
    nameElement.appendChild(option)
  })
}

getNames()

const ticketForm = document.getElementById('ticket-form')
ticketForm.onsubmit = async (e) => {
  e.preventDefault()

  const formEl = e.target
  let isValid = formEl.checkValidity()

  if (isValid) {
    formEl.classList.remove('was-validated')
  } else {
    formEl.classList.add('was-validated')
  }

  const formData = new FormData(formEl)
  const formEntries = Object.fromEntries(formData.entries())
  console.log(formEntries)

  let response
  if (isValid) {
    try {
      response = await fetch(server + 'tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formEntries),
      })

      if (response.status === 200) {
        console.log('Sikeres küldés')
        ticketForm.reset()
      }

      if (response.status === 400) {
        console.error('Sikertelen küldés')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
