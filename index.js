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
// var height=0;
// var body = document.body,
//     html = document.documentElement;
// var max = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );

// $(document).on('mousewheel DOMMouseScroll', function (event) {
//     if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
//        console.log('scrolling up')
//            prev();
//     } else {
//         console.log('scrolling down')
     
//         next();
//     }
// });



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






//HOVER


$("#service1").hover(function(){
  $("#service-h1").toggleClass("gradient-text1");
  }
);

$("#service2").hover(function(){
  $("#service-h2").toggleClass("gradient-text2");
  }
);
$("#service3").hover(function(){
  $("#service-h3").toggleClass("gradient-text3");
  }
);
$("#service4").hover(function(){
  $("#service-h4").toggleClass("gradient-text4");
  }
);
$("#service5").hover(function(){
  $("#service-h5").toggleClass("gradient-text5");
  }
);
$("#service6").hover(function(){
  $("#service-h6").toggleClass("gradient-text6");
  }
);




// Comeback


var message = "Come Back Soon!";
  var original;

  $(window).focus(function() {
    if (original) {
      document.title = original;
    }
  }).blur(function() {
    var title = $('title').text();
    if (title != message) {
      original = title;
    }
    document.title = message;
  });


//NAV INDICATOR

const sections=document.querySelectorAll('.page');
const tabs=document.querySelectorAll('.tab');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section =>{
    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;
    // if(pageYOffset>=sectionTop){
    //   current=section.getAttribute('id');
    // }
    if (pageYOffset >= sectionTop - sectionHeight / 8) {
      current = section.getAttribute("id");
    }
    // if(pageYOffset==0){
    //    current="home";
    // }
  })
  console.log(current);
  tabs.forEach(tab=>{
    tab.querySelector('a').classList.remove('active-tab');
    if(tab.classList.contains(current)){
      tab.querySelector('a').classList.add('active-tab');
    }
    if(current==null){
      tab.querySelector('#works').classList.add('active-tab');
    }
  })
})



//Typing Animation


const textDisplay=document.getElementById("type-animation")
const phrases=['One Stop Solution','Get the most out of your business','Create, Connect and grow','Are Constructed to impress']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 100 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()



//MOUSE
"use strict";
(function(){
var cursor=document.querySelector('.cursor');
var editCursor= function  editCursor (e){
cursor.style.left=e.pageX='px';
cursor.style.top = e.pageY='px';
};
  window.addEventListener('mousemove',editCursor);
})();


//Logo click

document.getElementById('logo').addEventListener('click',()=>{
  location.href="http://introis.com";
});
