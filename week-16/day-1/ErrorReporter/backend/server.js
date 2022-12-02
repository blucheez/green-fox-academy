import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.get('/users', (req, res) => {
  res.json({
    "users": [
        {
          "id": 1,
          "name": "Egg"
        },
        {
          "id": 2,
          "name": "Tom"
        }
      ]
  });
});

app.get('/tickets', (req, res) => {
  res.json({
    "tickets":
      [
        {
          "id" : 21,
          "reporter" : "Egg",
          "manufacturer" : "dell",
          "serial_number" : 123456789,
          "description" : "screen pixel error",
          "reported_at" : "2018-01-10T23:00:00.000Z"
        },
        {
          "id" : 27,
          "reporter" : "Brian",
          "manufacturer" : "dell",
          "serial_number" : 987654321,
          "description" : "touchpad is not working",
          "reported_at" : "2018-01-17T23:00:00.000Z"
        }
      ]
  });
});

app.post('/tickets', (req, res) => {
  res.json({
    "id" : 22,
    "reporter": "Egg",
    "manufacturer": "dell",
    "serial_number": 123481639,
    "description": "keyboard is not working",
    "reported_at" : "2018-01-18T23:00:00.000Z"
  });
});

app.delete('/tickets/:id', (req, res) => {
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
