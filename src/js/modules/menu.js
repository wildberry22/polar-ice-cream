const menu = () => {
    const btnOpen = document.querySelector('.menu-show');
    const btnClose = document.querySelector('.menu-hide');
    const menu = document.querySelector('.header .nav-list');
    const navItems = document.querySelectorAll('.nav-list__item');

    btnOpen.addEventListener('click', () => {
        if(document.body.offsetWidth < 421) {
            btnClose.style.left = '20px';

        } else {
            btnClose.style.left = '40px';
        }
        menu.style.left = '0px';
        document.querySelector('body').style.overflow = 'hidden';
        
    });

    btnClose.addEventListener('click', () => {
        menu.style.left = '-105%';
        btnClose.style.left = '-105%';
        document.querySelector('body').style.overflow = 'visible';
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(document.body.offsetWidth < 601) {
                menu.style.left = '-105%';
                btnClose.style.left = '-105%';
                document.querySelector('body').style.overflow = 'visible';
            }
        });
    });
};

export default menu;