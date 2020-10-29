const body = document.querySelector('body')
//create an element
function newElement(tagType,classes){
    const newElement = document.createElement(tagType)
    for (let i = 0; i < classes.length; i++){
        newElement.classList.add(classes[i])
    }
    return newElement
}
//extract value
const extractValue = () =>{
    const home = generateHomeCard()
    return home
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




let searchParam = ''
// console.log(home[1]);
const fetchReddit = (searchKey) =>{
    fetch(`https://www.reddit.com/subreddits/search.json?nsfw=no&q=${searchKey}`)
    .then(response=>{return response.json()})
    .then(redditData=>{
        const display = {
            icon: redditData.data.children[0].data.icon_img,
            name: redditData.data.children[0].data.display_name_prefixed
        }
        
        const card =newElement('div',['card'])
        const img = newElement('img',['rImg'])
        img.setAttribute('src',`${display.icon}`)
        img.setAttribute('alt',`${display.name}`)

        card.append(img)
        //append to body
        body.appendChild(card)
    })

}
const pageUI = () =>{
    const home = generateHomeCard()
    body.appendChild(home[0])

    home[1].addEventListener('click',()=>{
        searchParam = home[2].value
        console.log(searchParam)
        fetchReddit(searchParam)
        body.removeChild(home[0])
        console.log();
    })
}
pageUI()