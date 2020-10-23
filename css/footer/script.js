// The checker
const gambitGalleryIsInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}


// Usage.
document.addEventListener('DOMContentLoaded', () => {
    const tester = document.querySelector('.bottom');
    const footer = document.querySelector('.bottom-i');
    // const answer = document.querySelector( '.answer' )

    const handler = () => raf(() => {
        // answer.innerHTML = 'Is the div visible? ' + ( gambitGalleryIsInView( tester ) ? 'Yes' : 'No' )
        if (gambitGalleryIsInView(tester)) {
            // console.log('yes');
            if (footer.className != '.buttom-i')
                footer.className = '.bottom-i footershow';
        } else {
            // let t = document.querySelector('.bottom-i').className;
            // console.log(t);
            footer.className = '.bottom-i'
        }
    })

    handler()
    window.addEventListener('scroll', handler)
})

// requestAnimationFrame
const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }


setTimeout(() => {
    footerWriter();
}, 1000);

function footerWriter() {
    var typed = new Typed('.footercommand', {
        strings: [
          'No frameworks',
          'No Boostrap',
          'No jQuery',
          'pure JS',
        ],
        typeSpeed: 60,
        backSpeed:20,
        delay: 50,
        loop: true
      });
}