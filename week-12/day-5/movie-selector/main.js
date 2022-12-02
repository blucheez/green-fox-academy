const genres = document.getElementById('genres')
const movies = document.getElementById('movies')
const moviesArr = [...movies.options]
const selectedMovie = document.querySelector('.selected-movie')

genres.onchange = () => {
  const genreMovies = moviesArr.filter((movie) => {
    if (movie.classList.contains(genres.value)) {
      return movie
    }
  })
  if (genres.value === '') {
    movies.options.length = 0
    moviesArr.forEach((movie) => {
      movies.appendChild(movie)
    })
    movies.options[0].selected = true
  } else {
    movies.options.length = 0
    genreMovies.forEach((movie) => {
      movies.appendChild(movie)
    })
    movies.options[0].selected = true
  }
  selectedMovie.textContent = movies.value
}

movies.onchange = () => {
  selectedMovie.textContent = movies.value
}
