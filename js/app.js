// Element selectors
const $title = document.querySelector('.title')
const $description = document.querySelector('.description')
const $searchInput = document.querySelector('input[name="search-term"]')
const $submitButton = document.querySelector('.submit')


// Event Listeners
$searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {

    // console.log($searchInput.value)
    $title.classList.add('hidden')
    $description.classList.add('hidden')
    $searchInput.classList.add('hidden')
    $submitButton.classList.add('hidden')

    const searchValue = $searchInput.value

    fetch(`http://reddit.com/search.json?nsfw=no&q=${searchValue}`)
      .then((response) => response.json())
      .then(response => {
        const data = response.data.children

        const arrayOfImages = data
          .map(item => item.data.url)
          .filter(url => url.includes('.jpg'))
      })
      .catch(e => console.error(e))
  }
})
