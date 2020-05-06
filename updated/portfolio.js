
var app = new Vue({
    el:'#app2',
    data: {
      name: 'Jackson.Stein',
      bio: 'Front-End.Developer.UI-Designer.Creative.VUE-Developer.Coder.Web-Designer',
      letters: [],
      bioLetters: [],
      displayText: false,
    //   topText: {
    //     line1: 'UX.D',
    //     line2: 'EV',
    //     line3: 'ELEOPER',
    //     line4: '/UI.',
    //     line5: 'DES',
    //     line6: 'IGNER'
    //   },
      line1: 'UX.D',
      line2: 'EV',
      line3: 'ELOPER',
      line4: '/UI.',
      line5: 'DES',
      line6: 'IGNER',
      topTextDisplay: true,
      line1Letters: [],
      line2Letters: [],
      line3Letters: [],
      line4Letters: [],
      line5Letters: [],
      line6Letters: [],
      yearGroups: [
        {
            number: '01',
            title: 'Developing Positions'
        },
        {
            number: '02',
            title: 'Years Developing'
        },
        {
            number: '03',
            title: 'Years of Freelance Design'
        },
        {
            number: '25',
            title: 'Years Lived'
        }
      ]
    },
    methods: {
      splitBio: function () {
        var text = this.bio.toUpperCase().split('');
        this.bioLetters = text;
      },
      splitLines: function () {
          var text1 = this.line1.split('');
          var text2 = this.line2.split('');
          var text3 = this.line3.split('');
          var text4 = this.line4.split('');
          var text5 = this.line5.split('');
          var text6 = this.line6.split('');
          this.line1Letters = text1
          this.line2Letters = text2
          this.line3Letters = text3
          this.line4Letters = text4
          this.line5Letters = text5
          this.line6Letters = text6
        },
        loadLanding: function () {
            //image & jobTitle fade in
            var elements = ['nav-links-top','rocks-image','job-title-container'];

            for (let i = 0; i < elements.length; i++) {
                var thisElement = $("." + elements[i]); //Get the current element based on class
                fadeInElement(thisElement, i);          //Call our "Fade in" function
            }
            function fadeInElement(elem, time) {      //Fade-in function that takes the element to fade-in, and the time it should wait
                setTimeout(function() {
                    elem.css("opacity", ".95");             //Set our element's opacity to 1
                }, 1650 * time + 500);                        //Set the time it should wait
            }
        }
    },
    mounted () {
      this.splitLines();
      this.loadLanding();
    }
  })

  //portfolio page Parallax
// window.addEventListener('scroll', function(e) {
//     const topBar = document.querySelector('.top-color-1');
//     const jobTitle = document.querySelectorAll('.jobTitle')
//     var scrolled = window.pageYOffset;
//     var rate = scrolled * -.1;
//     if (rate > -130) {
//         topBar.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
//     }
//     for ( var i = 0; length = jobTitle.length; i++ ) {
//         var pos = window.pageYOffset * jobTitle[i].dataset.rate;
//         if (rate > -150) {
//             jobTitle[i].style.transform = 'translate3d(0px, '+(pos)+'px, 0px)';
//         }
//     }
//   })