const slider = () => {
    const mainSwiper = new Swiper(".testimonials-slider .mainSwiper", {
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper = new Swiper(".testimonials-slider .thumbsSwiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2.5,
        centeredSlides: true,
        watchSlidesProgress: true, 
        thumbs: {
            swiper: mainSwiper,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });

    
};

export default slider;