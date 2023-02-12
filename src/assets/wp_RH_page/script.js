const typedWord = ["ENTER MUSEUM"];
let letterPos = 0 //pointing at the first letter of the word
let typed = true



function typeFirst() {
    //typewriter effect

    // sliced word  
    //is updated eveytime the function is called
    document.querySelector('.enter-musuem').innerHTML = typedWord[0].substring(0,letterPos) 
 
    if (letterPos++ != typedWord[0].length){
        //pointer moves to next letter 

        //calls itself every 200ms  
        setTimeout(typeFirst, 500)
    }

    if (letterPos === typedWord[0].length){
        document.getElementById('enter-musuem').style.position = 'relative'

    }
   
}

function removeNav(){
    //remove navigation bar when screen is less then 700px
    document.getElementById('nav2').classList.remove('show')
    document.getElementById('nav2').classList.add('hidden')

    //styling changes
    document.body.style.backgroundColor = 'white'
    document.getElementById('top-nav').style.backgroundColor = 'white'
    document.getElementById('img-nav').style.display = 'block'
    document.getElementById('checkbtn').style.display = 'block'
    document.body.style.overflowY = 'visible'
 //  document.getElementById('museum-vid').style.display = 'block'

 window.onscroll = function() {};
}

function addNav(){
    document.body.style.overflow = 'hidden'
    //shows navigation bar when screen is less then 700px
    document.getElementById('nav2').classList.remove('hidden')
    document.getElementById('nav2').classList.add('show')

    //styling changes
    document.body.style.backgroundColor = 'black'

    console.log('scroll is hidden')
    document.getElementById('top-nav').style.backgroundColor = 'black'
    document.getElementById('img-nav').style.display = 'none'
    document.getElementById('checkbtn').style.display = 'none'
 // document.getElementById('museum-vid').style.display = 'none'

 // Get the current page scroll position
     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
 };
 }

if(document.querySelector('.enter-musuem')){
    setInterval(typeFirst, 1500) //calls function after 1.5 seconds
    
}
 