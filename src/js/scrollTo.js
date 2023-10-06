import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function scrollTo() {
  const btn = document.getElementById('js-scroll-to-top');
  btn.addEventListener('click', e => {
    gsap.to(window, {duration: 2, scrollTo: 0});
  });

  const navItems = Array.from(document.querySelectorAll('.js-nav-item'));
  navItems.forEach(el => {
    const id = el.dataset.href;
    el.onclick = e => {
      if (!id) return;
      gsap.to(window, {duration: 2, scrollTo: `#${id}`});
    }
  });
}
