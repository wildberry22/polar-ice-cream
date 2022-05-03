const scrollSection = () => {
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset + 140;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-list__item a[href*=' + sectionId + ']').parentNode.classList.add('active');
        } else {
            document.querySelector('.nav-list__item a[href*=' + sectionId + ']').parentNode.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive); 
};

export default scrollSection;



