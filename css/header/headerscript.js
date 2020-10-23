const network = {
    instagram : 'https://www.instagram.com/fredy_sandoval_art/',
    codepen: 'https://codepen.io/fredy-sandoval/',
    github: 'https://github.com/FredySandoval',
    leetcode: 'https://leetcode.com/shockerovip/',
    email: 'https://mail.google.com/mail/?view=cm&fs=1&to=me@fredy.dev&su=Hey_It_was_checking_your_page&body=I_was_really_good'
}

window.addEventListener('load', (event) => {
    const emptyH = document.querySelectorAll('.header-icons'); //.style.animationName = '';

    setTimeout(() => {
        emptyH.forEach((item)=> {
            item.style.animationName = '';
            item.style.animationName = 'bounce-4';
        })
    }, 1000);
    
    setTimeout(function(){ 
        emptyH.forEach((item)=> {
            item.style.animationName = '';
        })
     }, 2000);
  });
function bounceIcon(temp) {
    temp.style.animationName = 'bounce-4';
    setTimeout(function(){ 
        temp.style.animationName = '';
        let social = temp.id;
        window.open(network[social]);
     }, 1000);
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.querySelector('.header-two').className = 'header-two headerhide';
    
  } else {
      let headerElement = document.querySelector('.header-two');
      if ( headerElement.className != 'header-two') headerElement.className = 'header-two headershow';
   
  }
  
}