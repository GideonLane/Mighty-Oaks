//class for scroll effect navbar
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 800) {
        navEl.classList.add('navbar-scrolled');
    }
    else if (window.scrollY < 800) {
        navEl.classList.remove('navbar-scrolled');
    }
});

//margin for navbar dropdown contact
//function margintop() {
    //document.getElementById('contactContainer').style.marginTop = '300px';
  // const contactContaner = document.getElementById('contactContainer');
//   contactContainer.classList.toggle('togglemargin');
//}

function changeColor(event) {
    var color = 'rgb(27, 20, 11)';
    event.style.backgroundColor=color;
}



