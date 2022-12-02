const usersURL = 'http://localhost:8080/users'

const ticketForm = document.querySelector('form')

// List users to select
const select = document.getElementById('name')
fetch(usersURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const val = document.createElement('option')
      val.value = user.id
      val.textContent = user.name
      select.appendChild(val)
    })
  })

