const points = document.getElementsByTagName('h2')[0]
const qContainer = document.querySelector('.q-container')

let questionsSnap = []

fetch('http://localhost:3000/api/game')
  .then((response) => response.json())
  .then((data) => {
    //using global variable to store json data
    questionsSnap = data
    //point counter
    let counter = 0
    points.textContent = `Pontszám: ${counter}`
    //point updater function
    const count = () => {
      points.textContent = `Pontszám: ${counter}`
    }
    //countdown function
    const countDown = (n) => {
      const timer = document.createElement('div')
      timer.classList.add('countdown')
      qContainer.appendChild(timer)
      let timeleft = n
      const downloadTimer = setInterval(() => {
        timeleft--
        timer.textContent = timeleft
        if (timeleft <= 0) clearInterval(downloadTimer)
      }, 1000)
    }

    const getQuestion = () => {
      // get new question from global var.
      const actualQ = questionsSnap.splice(
        Math.floor(Math.random() * questionsSnap.length),
        1
      )
      //update question
      const qElement = document.createElement('h3')
      qElement.textContent = actualQ[0].question
      qContainer.appendChild(qElement)

      //create answer options
      actualQ[0].answers.forEach((answer) => {
        const btn = document.createElement('button')
        btn.textContent = answer.answer
        btn.isCorrect = answer.is_correct
        qContainer.appendChild(btn)
        btn.onclick = () => {
          if (questionsSnap.length > 0) {
            btn.onclick = null
            const btns = document.getElementsByTagName('button')
            // show correct answer
            for (let btn of btns) {
              if (btn.isCorrect) {
                btn.style.backgroundColor = 'green'
              }
            }
            //add to points if answer is correct
            if (btn.isCorrect) {
              counter++
              count()
            } else {
              btn.style.backgroundColor = 'red' //color red if incorrect
            }

            countDown(5)
            setTimeout(() => {
              qContainer.innerHTML = ''
              getQuestion()
            }, 5000)
          } else {
            qContainer.innerHTML = ''
            const qElement = document.createElement('h3')
            qElement.textContent = 'Elfogytak a kérdések'
            qContainer.appendChild(qElement)
          }
        }
      })
    }

    getQuestion()
  })
