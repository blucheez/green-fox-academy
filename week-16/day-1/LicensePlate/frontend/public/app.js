'use strict'

const endpoint = 'http://localhost:5000/search'

const form = document.querySelector('.needs-validation')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (form.checkValidity()) {
    form.classList.remove('was-validated')

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const searchParams = {
      q: data.q,
    }

    if (data.filter !== undefined) {
      searchParams[data.filter] = 1
    }

    const queryParams = new URLSearchParams(searchParams)
    const url = endpoint + '?' + queryParams.toString()

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        handleResponse(data)
      })
      .catch((err) => {
        const errorElement = document.getElementById('form-error')
        errorElement.textContent = err.message
        errorElement.classList.remove('d-none')
      })
  } else {
    form.classList.add('was-validated')
  }

  form.reset()
})

const handleResponse = (data) => {
  const results = data.data
  const tbody = document.querySelector('#results tbody')
  tbody.innerHTML = ''
  const queryTableMapping = ['license', 'brand', 'model', 'color', 'year']

  if (results.length > 0) {
    results.forEach((row) => {
      const tr = document.createElement('tr')

      queryTableMapping.forEach((key) => {
        const td = document.createElement('td')

        if (row[key] !== undefined) {
          if (key === 'brand') {
            const link = document.createElement('a')
            link.textContent = row[key]
            link.setAttribute('href', '#')
            link.onclick = (e) => {
              const brandUrl = endpoint + '/' + e.target.textContent
              fetch(brandUrl)
                .then((response) => response.json())
                .then(handleResponse)
            }
            td.appendChild(link)
          } else {
            td.textContent = row[key]
          }
        }
        tr.appendChild(td)
      })
      tbody.appendChild(tr)
    })
  }
}
