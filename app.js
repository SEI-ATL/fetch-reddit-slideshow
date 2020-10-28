fetch(`http://www.reddit.com/search.json?q=cats+nsfw:no`)
.then((res) => res.json())
    console.log(res)
