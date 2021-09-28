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
