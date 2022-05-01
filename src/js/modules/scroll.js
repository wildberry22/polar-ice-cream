const scroll = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', fixHeader);
    
    function fixHeader() {
        if(window.scrollY > header.offsetHeight - 60) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
};

export default scroll;