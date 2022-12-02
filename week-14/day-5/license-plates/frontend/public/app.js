'use strict'

const endpoint = 'http://localhost:5000/search'

const searchForm = document.querySelector('form')

document.getElementById('q').oninput = (e) => {
  e.preventDefault()
  const input = e.target
  

  const regex = /^[A-Z0-9-]+$/

  if (regex.test(input.value)) {
    input.setCustomValidity('')
  } else {
    input.setCustomValidity('Sorry, the submitted license plate is not valid')
    
}

searchForm.onsubmit = (e) => {
  e.preventDefault()
  const form = e.target

  if (form.checkValidity()) {
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const searchParams = {
      q: data.q,
    }
    if (data.filter !== undefined) {
      searchParams[data.filter] = 1
    }

    const query = new URLSearchParams(searchParams)

    const url = endpoint + '?' + query.toString()

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then(handleResponse)
      .catch((err) => {
        console.log(err)
      })

    searchForm.reset()
  }
}

const handleResponse = (data) => {
  const queryRes = data.data
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''

  const queryTableMapping = ['license', 'brand', 'model', 'color', 'year']

  queryRes.forEach((row) => {
    const rowElement = document.createElement('tr')

    queryTableMapping.forEach((key) => {
      const el = document.createElement('td')
      el.textContent = ''

      if (row[key] !== undefined) {
        if (key === 'brand') {
          const brandLink = document.createElement('a')
          brandLink.textContent = row[key]
          brandLink.setAttribute('href', '#')
          brandLink.onclick = (e) => {
            const brandURL = endpoint + '/' + e.target.textContent
            fetch(brandURL)
              .then((response) => response.json())
              .then(handleResponse)
          }
          el.appendChild(brandLink)
        } else {
          el.textContent = row[key]
        }
      }
      rowElement.appendChild(el)
    })

    tbody.appendChild(rowElement)
  })
}}
