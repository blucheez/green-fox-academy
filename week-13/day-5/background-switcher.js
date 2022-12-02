setInterval(() => {
  const cacheBuster = Math.floor(Math.random() * 10000000000000)
  document.body.style.backgroundImage = `url('https://loremflickr.com/g/1280/800/hungary?ord=${cacheBuster}')`
}, 5000)
