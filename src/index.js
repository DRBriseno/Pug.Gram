import data from "./data.js";


const buildPuppyCard = function(puppy){
  // Elements needed to build a card  
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const a = document.createElement('a')
    const img = document.createElement('img')


  // Newly created elements in the DOM
    const body = document.querySelector('body');
    body.append(div)
    h4.append(a)
    div.append(h4)
    div.append(img)


  // Content and attributes
    a.innerHTML = puppy.name
    a.setAttribute('href', puppy.info)
    img.setAttribute('src', puppy.pic)
    div.setAttribute('class', 'card')
  }



data.forEach(function(puppy) {
  buildPuppyCard(puppy)
}