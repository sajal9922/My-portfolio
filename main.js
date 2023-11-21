const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle('toggle');
  });
  //
};

navSlide();

const navLinkEls = document.querySelectorAll('.link');
const windowPathName = window.location.pathname;

navLinkEls.forEach((linkEl) => {
  if (linkEl.href.includes(windowPathName)) {
    linkEl.classList.add('active');
  }
});
