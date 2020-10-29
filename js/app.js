// ================================================================ ELEMENT SELECTORS
const $container = document.querySelector('.container')
const $title = document.querySelector('.title')
const $description = document.querySelector('.description')
const $searchInput = document.querySelector('input[name="search-term"]')
const $submitButton = document.querySelector('.submit')
const $loadingMsg = document.querySelector('.loading')
const $carouselInner = document.querySelector('.carousel-inner')


// ================================================================ HELPER FUNCTIONS
/*
  Create the following, where img src is from the API call:
  <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
  </div>
*/
const createCarouselItems = (urls, searchTerm) => urls.map((url, index) => {
  const $carouselDiv = document.createElement('div')
  $carouselDiv.classList.add('carousel-item')

  if (index === 0) $carouselDiv.classList.add('active')

  const $carouselImg = document.createElement('img')
  $carouselImg.src = url
  $carouselImg.alt = searchTerm
  $carouselImg.classList.add('d-block', 'w-100')

  $carouselDiv.appendChild($carouselImg)

  return $carouselDiv
})

// Removes all children of a parent node
const removeChildren = (parent) => {
  while (parent.lastChild) parent.removeChild(parent.lastChild);
}


// ================================================================ EVENT HANDLERS
const handleSearch = () => {
  const searchValue = $searchInput.value

  $loadingMsg.classList.remove('hidden')

  fetch(`http://reddit.com/search.json?nsfw=no&q=${searchValue}`)
    .then((response) => response.json())
    .then(response => {
      // Get array of 'children', the actual data returned from the API
      const data = response.data.children;

      // Hide all the elements
      [$title, $description, $searchInput, $submitButton, $loadingMsg].forEach(el => {
        el.classList.add('hidden')
      })

      // Go through the data from the API, get all the URLs, and filter out anything that isn't
      // a JPG
      const arrayOfImageUrls = data
        .map(item => item.data.url)
        .filter(url => url.includes('.jpg'))

      // Create carousel items out of the JPGs from the API call
      const arrayOfCarouselItems = createCarouselItems(arrayOfImageUrls, searchValue)

      // Add each of the carousel items to the carousel component in the DOM
      arrayOfCarouselItems.forEach(item => {
        $carouselInner.appendChild(item)
      })

      // Create a 'Stop' button to stop the carousel
      const $stopButton = document.createElement('button')
      $stopButton.classList.add('btn', 'btn-primary')
      $stopButton.textContent = 'Stop'

      // When 'stop' is clicked, delete carousel items and show search again
      $stopButton.addEventListener('click', (e) => {
        removeChildren($carouselInner);

        [$title, $description, $searchInput, $submitButton].forEach(el => {
          el.classList.remove('hidden')
        })
        $searchInput.value = ''

        $container.removeChild($stopButton)
      })

      $container.appendChild($stopButton)
    })
    .catch(e => console.error(e))
}


// ================================================================ EVENT LISTENERS
$searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch() })
$submitButton.addEventListener('click', handleSearch)
