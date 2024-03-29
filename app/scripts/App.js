import '../assets/styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import ClientArea from './modules/ClientArea.js';

let modal;
new ClientArea();
new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

document.querySelectorAll(".open-modal").forEach(el => {
     el.addEventListener("click", e=> {
          e.preventDefault();
          if(typeof modal == "undefined"){
               import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                    modal = new x.default();
                    setTimeout(() => modal.openTheModal(), 20)
               }).catch(() => console.log("Modal cannot be loaded."));
          } else{
               modal.openTheModal();
          }
     })
})

if(module.hot){
     module.hot.accept();
}