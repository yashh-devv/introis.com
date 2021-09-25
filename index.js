// MENU

const navToggle=document.querySelector( '.nav-toggle');
const navlinks=document.querySelectorAll('.nav-link');
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navlinks.forEach(link => {
    link.addEventListener('click' , ()=>{
        document.body.classList.remove('nav-open');
    })
})

//SCROLL

const vh = document.documentElement.clientHeight ;
var height=0;
var body = document.body,
    html = document.documentElement;
var max = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

$(document).on('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
       console.log('scrolling up')
           prev();
    } else {
        console.log('scrolling down')
     
        next();
    }
});



function next(){
    if(height<max){
  window.scrollTo(0,height+=vh);
    console.log("Scrolling")
    }
}
function prev(){
    if(height>=0){
window.scrollTo(0,height-=vh);
    console.log("Scrolling")
    }
    
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



