const API_KEY = 'Yz6S89bw8eaQJ9LzprGgroCcZugdzWPL'
const div = document.querySelector('div')
const form = document.querySelector('form')

form.onsubmit = (e) => {
  e.preventDefault()
  let category = document.getElementById('search').value
  div.innerHTML = ''

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=16&offset=0&rating=r&lang=en`
  )
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      result.data.forEach((gif) => {
        const img = document.createElement('img')
        img.style.margin = '5px'
        img.style.cursor = 'pointer'
        img.src = gif.images.fixed_height_still.url
        div.appendChild(img)
        img.onclick = () => {
          img.src = gif.images.fixed_height.url
        }
      })
    })
    .catch((err) => console.log(err))
}
