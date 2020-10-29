//get top images
// get recent images



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
        //   const images = data.data.children.map((child) => {
        //     return child.data.url;
        //   });

        // use reduce to find only images
        // if post_hint = image, it is an image, add to list
        const images = data.data.children.reduce((acc, child) => {
          if (child.data.post_hint == 'image') {
            acc.push(child.data.url);
          }
          return acc;
        }, []);
        //returns a bunch of urls as an array

        const title = data.data.children.map(child => {return child.data.title});

        console.log(title);
        console.log(images);

        // call create slides function to set DOM stuff
        createSlideShow(images, title);
      })
      .catch((e) => {
        console.error('Error: ', e);
      });
  };

  const createSlideShow = (images, title) => {
    //select random index number >> this is the slide that will show first
    const activeSlide = Math.floor(Math.random() * images.length);

    // loop through each image in the array
    for (let i = 0; i < images.length; i++) {

        const slidebutton = document.createElement("li");
        slidebutton.setAttribute("data-target", "#carousel");
        slidebutton.setAttribute("data-slide-to", `${i}`);
        document.querySelector(".carousel-indicators").appendChild(slidebutton);


        // const image = document.createElement('img');
        // image.src = images[i];
        const image = document.createElement('div');
        image.innerHTML= `<img src = ${images[i]}>`;
        image.setAttribute("class", "carousel-item");
        image.setAttribute ("alt", `${title[i]}`);
        document.querySelector(".carousel-inner").appendChild(image);
        const captionDiv = document.createElement("div");
        captionDiv.setAttribute("class", "carousel-caption d-none d-md-block");

        image.appendChild(captionDiv);
        const caption = document.createElement("p");
        caption.style.backgroundColor = "#00000050";
        caption.textContent = `${title[i]}`;
        captionDiv.appendChild(caption);



      // set slide that is showing to be the random selected slide
      if (i == activeSlide) {
        slidebutton.setAttribute('class', 'active');
        image.setAttribute('class', 'active carousel-item');
      }
    }

    $('.carousel').carousel(
        {interval: 3000}
    )
};


  //onclick or on enter to call it
  document.querySelector('#searchbtn').addEventListener('click', function() {
      let searchQuery = document.getElementById('search').value.toLowerCase();
      getPosts(searchQuery);
  });






  // searchQuery.addEventListener("keyup", function(event) {
  //     if (event.keyCode === 13) {
  //      event.preventDefault();

  //      console.log(searchQuery);
  //     }
  //   });

  // if subreddit does not exist array is empty

  // // get json from reddit api = posts from the subreddit
  // // parse through json and search for .gif/.png/.image types
  //     // post_hint
  //     //data.children[].data.url key

  //     const result = {};

  //     for (let i=0; i<result.data.children.length; i++){
  //         let url = result.data.children[i].data.url;
  //     }

  //   result.data.children.map(child=>{return child.data.url});

  //then chains >>> async/await
