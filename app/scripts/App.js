import '../assets/styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

if(module.hot){
     module.hot.accept();
}