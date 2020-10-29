let state ="still"

const form = document.getElementById('disapear');
document.getElementById('submit-button').addEventListener('click', function() {
    
    const yourSearch = document.getElementById('word-input').value
    state = "run"
    if (yourSearch){
    runFetch(yourSearch);
    form.classList.add("unsee");
    return state;
}})

  document.getElementById('stop-button').addEventListener('click', function(){
    form.classList.remove("unsee");
    state = "still"
    return state;
  })

   

function runFetch(word){
fetch(`http://www.reddit.com/search.json?q=${word}+nsfw:no`)
.then(res => res.json())
.then(json => {
    const screen = document.querySelector('.container');
    const pics = document.createElement('img');
    const bridge2=getLength(json);
 
    for(let i=0; i < bridge2; i++) {
        
        setTimeout(function() {
            const bridge1=getImage(json, i);
            appendImage(bridge1,screen,pics)
            console.log(i);}, 
            i * 3000, i)}}
)}


//}  

function getImage(a,b){
    const noVideo = a.data.children.filter(pic => pic.data['post_hint'] ==='image')
    const image = noVideo[b].data.url;
    return image;
    }
    
function getLength(a){
    const noVideo = a.data.children.filter(pic => pic.data['post_hint'] ==='image')
    const length = noVideo.length;
    return length; 
}

function appendImage(link,output,image){
    // const output = document.querySelector('.container');
    // const image = document.createElement('img');
    image.setAttribute('src',link);
    output.appendChild(image);
}

// function makeScreen(link){
//      const screen = document.querySelector('.container');
//      const pics = document.createElement('img');
//      console.log('hey!')
//      pics.setAttribute('src',link);
//      screen.appendChild(pics);
//      return
//     }



