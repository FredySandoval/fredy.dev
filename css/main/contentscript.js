setTimeout(() => { 
    const [red, green, blue] = [230, 230, 230]
    const section1 = document.querySelector('.profile-picture');
    window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 50
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
        const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      })
      
}, 1000);

let status = 1;
setTimeout(() => {
  setInterval(() => {
    status ^= true;
    document.querySelector('.promt').innerText = status?'▊': '\xa0';
  }, 300);

  typeWriter();

  // signature();
  
}, 1000);


function typeWriter() {
  var typed = new Typed('.command', {
    strings: [
      'Hey!',
      'My naame ',
      'My name is ^200 Fredy',
      'I built this website.',
      'from zero...',
      'from scratch',
      'Coding is hard...',
      'but guest what?',
      'It can be a lot of fun.'
    ],
    typeSpeed: 60,
    backSpeed:20,
    delay: 50,
    loop: true
  });
}

function signature() {
let textChrome = `
####   #    #
##  #   #  #
###      ##
##  #    ##
###      ##

######  #####  #####  ####    #    #
##      ##  #  ##     ##  #    #  #
#####   ####   ####   ##   #    ##
##      ## #   ##     ##  #     ##
##      ##  #  #####  ####      ##
`;

  console.clear();
  console.log(textChrome);
}