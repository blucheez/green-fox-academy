const tbody = document.querySelector('tbody')

const url = 'http://localhost:8080/tickets/'

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ticket) => {
      console.log(ticket)
      const tr = document.createElement('tr')
      const queryTableMapping = [
        'id',
        'reporter',
        'manufacturer',
        'serial_number',
        'description',
        'reported_at',
      ]

      queryTableMapping.forEach((key) => {
        const td = document.createElement('td')
        td.textContent = ticket[key]
        tr.appendChild(td)
      })
      const btn = document.createElement('button')
      btn.textContent = 'Delete'
      btn.onclick = () => {
        fetch(url + ticket.id, {
          method: 'DELETE',
        })
      }
      tr.appendChild(btn)
      tbody.appendChild(tr)
    })
  })
