import express from 'express'
import cors from 'cors'
import fs from 'fs'
import ticketsJson from './tickets.json' assert { type: 'json' }

let users = [
  {
    id: 1,
    name: 'Egg',
  },
  {
    id: 2,
    name: 'Tom',
  },
  {
    id: 3,
    name: 'Mary',
  },
  {
    id: 4,
    name: 'Brian',
  },
  {
    id: 5,
    name: 'Daisy',
  },
]

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/tickets', (req, res) => {
  res.json(ticketsJson)
})

app.post('/tickets', (req, res) => {
  console.log(req.body)
  if (
    !req.body.manufacturer ||
    !req.body.serial_number ||
    !req.body.description
  ) {
    res.send('Fill out every field!')
  }

  let reporterName = []
  users.filter((entry) => {
    if (entry.id === Number(req.body.reporter_id)) {
      reporterName.push(entry.name)
    }
  })

  const timeStamp = new Date()
  //Read file
  const rawdata = fs.readFileSync('tickets.json')
  const tickets = JSON.parse(rawdata)
  //Structure ticket object
  const dataToAdd = {
    id: tickets.at(-1).id + 1,
    reporter: reporterName[0],
    manufacturer: req.body.manufacturer,
    serial_number: req.body.serial_number,
    description: req.body.description,
    reported_at: timeStamp.toISOString(),
  }
  tickets.push(dataToAdd)
  //Write file
  const data = JSON.stringify(tickets, null, 2)
  fs.writeFileSync('tickets.json', data)

  res.redirect('http://127.0.0.1:5500/frontend/tickets.html')
})

app.delete('/tickets/:id', (req, res) => {
  const rawdata = fs.readFileSync('tickets.json')
  const tickets = JSON.parse(rawdata)

  let newDB = []
  tickets.filter((ticket) => {
    if (ticket.id !== Number(req.params.id)) {
      newDB.push(ticket)
    }
  })
  const data = JSON.stringify(newDB, null, 2)
  fs.writeFileSync('tickets.json', data)

  res.redirect('http://127.0.0.1:5500/frontend/tickets.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
