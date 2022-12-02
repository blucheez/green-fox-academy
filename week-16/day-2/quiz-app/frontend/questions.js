const qList = document.querySelector('.q-list')

const fetchQuestions = () => {
  fetch('http://localhost:3000/api/questions')
    .then((response) => response.json())
    .then((data) => {
      qList.innerHTML = ''

      data.forEach((q) => {
        const listItem = document.createElement('div')
        const link = document.createElement('a')

        link.textContent = 'törlés'
        link.onclick = () => {
          fetch('http://localhost:3000/api/questions/' + q.id, {
            method: 'DELETE',
          })
          fetchQuestions()
        }

        listItem.textContent = q.question
        listItem.appendChild(link)
        qList.appendChild(listItem)
      })
    })
}

fetchQuestions()

const addForm = document.querySelector('form')
addForm.onsubmit = (e) => {
  e.preventDefault()
  const form = e.target
  /* const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries()) */
  form.submit()
  fetchQuestions()
}
