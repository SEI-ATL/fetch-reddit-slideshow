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
    const api_call = `http://www.reddit.com/search.json?nsfw=no&q=${searchValue}`

    console.log(api_call)

    fetch(api_call)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then(res => console.log(res))
  }
})
