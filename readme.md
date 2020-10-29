# Reddit photo slideshow

![alt text](https://github.com/ruvvet/fetch-reddit-slideshow/blob/main/img/redditslide.gif)

![alt text](https://github.com/ruvvet/fetch-reddit-slideshow/blob/main/img/ss.png)

Slideshow that calls the Reddit API using fetch w/ javascript.
Returns images found using the search query and displays them as a slideshow gallery.

## How to use
1. Go to [repo](https://github.com/ruvvet/fetch-reddit-slideshow) on Github profile.
2. `fork` + `clone`.
3. Clone to local.
```text
git clone https://github.com/ruvvet/fetch-reddit-slideshow.git
```
4. Find `tic-tac-toe` directory.
5. Open `index.html` in browser.
```text
open index.html
```
6. Done.


# Code Snippets
## Fetching the images

```javascript
const getPosts = (searchQuery) => {
    if (!searchQuery) {
      searchQuery = 'meme';
    }
    const fetchQuery = `http://www.reddit.com/search.json?q=${searchQuery}+nsfw:no`;
    console.log(fetchQuery);

    fetch(fetchQuery)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        // use reduce to find only images
        // if post_hint = image, it is an image, add to list
        const images = data.data.children.reduce((acc, child) => {
          if (child.data.post_hint == 'image') {
            acc.push(child.data.url);
          }
          return acc;
        }, []);
        //returns a bunch of urls as an array
        console.log(images);
        // call create slides function to set DOM stuff
        createSlideShow(images);
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
  };
```