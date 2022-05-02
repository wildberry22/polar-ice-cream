const tabs = () => {
    const navItem = document.querySelectorAll('.product-tabs__nav-item');
    const contentItem = document.querySelectorAll('.product-tabs__content-item');
    
    hide();
    show(0);

    navItem.forEach((nav, idx) => {
        nav.addEventListener('click', (e) => {
            hide();
            show(idx);
        });
    });

    
    function show (i) {
        navItem[i].classList.add('active');
        contentItem[i].classList.remove('hide');
    }

    function hide() {
        navItem.forEach(item => {
            item.classList.remove('active');
        });
        contentItem.forEach(item => {
            item.classList.add('hide');
        });
    }

};

export default tabs;