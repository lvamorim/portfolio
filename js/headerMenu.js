const mobileMenuToggle = (event) => {
  const menu = document.getElementById('menu');
  const button = event.target;

  const toggle = (action) => {
    const main = document.querySelector('main');

    menu.classList[action]('hidden');
    button.classList[action]('open');
    !menu.classList.contains('hidden') ? main.classList.add('blur') : main.classList.remove('blur');
    button.setAttribute('aria-label', button.classList.contains('open') ? 'Abrir menu' : 'Fechar menu');
    button.setAttribute('aria-expanded', !button.classList.contains('open') && true);
  };

  toggle('toggle');
  menu.addEventListener('click', () => toggle('add'));
}

const activeMenuLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#menu a');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}

export {
  mobileMenuToggle, activeMenuLink
}
