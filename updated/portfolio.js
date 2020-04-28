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
      line6Letters: []
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
      }
    },
    mounted () {
      this.splitLines();
    }
  })

  //portfolio page Parallax
window.addEventListener('scroll', function(e) {
    const redBar = document.querySelector('.top-color-1');
    const jobTitle = document.querySelectorAll('.jobTitle')
    var scrolled = window.pageYOffset;
    var rate = scrolled * -.1;
    if (rate > -80) {
        redBar.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    }
    for ( var i = 0; length = jobTitle.length; i++ ) {
        var pos = window.pageYOffset * jobTitle[i].dataset.rate;
        if (rate > -150) {
            jobTitle[i].style.transform = 'translate3d(0px, '+(pos)+'px, 0px)';
        }
    }
  })