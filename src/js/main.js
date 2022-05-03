import scroll from "./modules/scroll";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import forms from "./modules/forms";
import menu from "./modules/menu";
import scrollSection from "./modules/scrollSection";


document.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    scroll();
    tabs();
    slider();
    forms();
    menu();
    scrollSection();
});