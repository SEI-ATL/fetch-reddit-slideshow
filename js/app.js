const body = document.querySelector('body')
let searchParam = ''

//create an element
function newElement(tagType,classes){
    const newElement = document.createElement(tagType)
    for (let i = 0; i < classes.length; i++){
        newElement.classList.add(classes[i])
    }
    return newElement
}

//home page
const generateHomeCard = () =>{
    const card = newElement('div',['card','anotherCard'])
    //title
    const title = newElement('h1',[])
    title.textContent = 'Reddit Images'

    //instructions
    const instructions = newElement('p',[])
    instructions.textContent ='Enter a one word search term and enjoy'
    //form
    const form = newElement('div',[])
    //input
    const input = newElement('input',['searchArea'])
    input.setAttribute('id','searchQuery')
    input.setAttribute('type','text')
    //search button
    const searchBtn = newElement('button',['searchBtn'])
    searchBtn.textContent = 'Search'
    form.append(instructions,input,searchBtn)
    //Append to card
    card.append(title,form)
    return [card,searchBtn,input]
}
const generateResults = (anObject) =>{
    const card =newElement('div',['card'])
    const img = newElement('img',['rImg'])
    img.setAttribute('src',`${anObject.icon}`)
    img.setAttribute('alt',`${anObject.name}`)

    
    card.append(img)
    //append to body
    body.appendChild(card)
    return card

}

//set display var
const info = (data) =>{
    // for (let i = 0; i < .length; i++)
    const display = {
        icon: data.data.children[0].data.icon_img,
        name: data.data.children[0].data.display_name_prefixed,
        images: []
        }   
        return display
}
//fetch reddit
const fetchReddit = (searchKey) =>{
    let display = {}
    fetch(`https://www.reddit.com/subreddits/search.json?nsfw=no&q=${searchKey}`)
    .then(response=>{return response.json()})
    .then(redditData=>{
        console.log(redditData);
        const result = info(redditData)
        console.log(result);
        generateResults(result)
        const refreshBtn = newElement('button',['clearResults'])
        refreshBtn.textContent = 'New Search'
        body.appendChild(refreshBtn)
        refreshBtn.onclick = function(){
            body.innerHTML = ""
            if (body.innerHTML === ""){
                pageUI()
            }
        }
        
    })
    
}

const pageUI = () =>{
    const home = generateHomeCard()
    body.appendChild(home[0])
    
    home[1].addEventListener('click',()=>{
        searchParam = home[2].value
        body.removeChild(home[0])
        fetchReddit(searchParam)
    })
    
}
pageUI()
