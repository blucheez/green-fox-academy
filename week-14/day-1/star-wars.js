const URL = 'https://swapi.py4e.com/api/people/?search='
const form = document.querySelector('.search-form')
const searchBox = document.getElementById('search')
const searchedUl = document.createElement('ul')
const filmUl = document.createElement('ul')

form.onsubmit = (e) => {
  e.preventDefault()
  searchedUl.innerHTML = ''

  fetch(URL + searchBox.value)
    .then((response) => response.json())
    .then((people) => {
      if (people) {
        document.querySelector('.char-list').appendChild(searchedUl)
        people.results.forEach((char) => {
          const searchedLi = document.createElement('li')
          searchedLi.textContent = char.name
          searchedLi.onclick = () => {
            document.querySelector('.film-list').appendChild(filmUl)
            char.films.forEach((film) => {
              filmUl.innerHTML = ''
              fetch(film)
                .then((response) => response.json())
                .then((film) => {
                  const filmLi = document.createElement('li')
                  filmLi.textContent = `${
                    film.title
                  } - ${film.release_date.slice(0, 4)}`
                  filmUl.appendChild(filmLi)
                })
            })
          }
          searchedUl.appendChild(searchedLi)
        })
      }
    })
    .catch('Nincs eredmény')
}
