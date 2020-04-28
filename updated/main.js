var $ = document.querySelector.bind(document);
     var $on = document.addEventListener.bind(document);

     var xmouse, ymouse;
     $on('mousemove', function (e) {
          xmouse = e.clientX || e.pageX;
          ymouse = e.clientY || e.pageY;
     });

     var ball = $('#ball');
     var x = void 0,
          y = void 0,
          dx = void 0,
          dy = void 0,
          tx = 0,
          ty = 0,
          key = -1;

     var followMouse = function followMouse() {
          key = requestAnimationFrame(followMouse);

          if(!x || !y) {
               x = xmouse;
               y = ymouse;
          } else {
               dx = (xmouse - x) * 0.125;
               dy = (ymouse - y) * 0.125;
               if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x = xmouse;
                    y = ymouse;
               } else {
                    x += dx;
                    y += dy;
               }
          }
          ball.style.left = x + 'px';
          ball.style.top = y + 'px';
     };
     


let mouseCursor = document.querySelector('.cursor');
let CursorPoint = document.querySelector('.cursorPoint');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursorFunc);
window.addEventListener('mousemove', cursorPoint);

function cursorFunc(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
function cursorPoint(e) {
  CursorPoint.style.top = e.pageY + "px";
  CursorPoint.style.left = e.pageX + "px";
}
navLinks.forEach(links => {
  links.addEventListener('mouseleave', () => {
    CursorPoint.classList.remove('link-grow');
    ball.classList.remove('hovered-link-point');
    links.classList.remove('hovered-link');
  });
  links.addEventListener('mouseover', () => {
    CursorPoint.classList.add('link-grow');
    ball.classList.add('hovered-link-point');
    links.classList.add('hovered-link');
  });
});

$on('mousemove', function () {
  $('.rightLineDark').style.width = (xmouse / 5) - 150 + "%";
  $('.leftLineDark').style.width = (xmouse / 5) - 80 + "%";
});


var app = new Vue({
  el:'#app',
  data: {
    name: 'Jackson.Stein',
    bio: 'Front-End.Developer.UI-Designer.Creative.VUE-Developer.Coder.Web-Designer',
    letters: [],
    bioLetters: [],
    displayText: false,
    // topText: {
    //   line1: 'FRONT-',
    //   line2: 'END',
    //   line3: 'DEVELOPER',
    //   line4: '&',
    //   line4: 'UI.DEVELOPER',
    // },
    // topTextDisplay: false
  },
  methods: {
    splitName: function () {
      var text = this.name.toUpperCase().split('');
      this.letters = text;
    },
    splitBio: function () {
      var text = this.bio.toUpperCase().split('');
      this.bioLetters = text;
    }
  },
  mounted () {
    this.splitName();
    this.splitBio();
  }
})
//  Loader JS --  =======================
window.addEventListener("load", function() {
  const loader = $('.loader');
  loader.className += " hidden";
});

// To Do:s 
  // fix cursor bubble
  //rewrite loader in Vue
  //Contact Page = Vue
  //make custom loading gif (DONE)
  //imbed rocket game in website
