document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('Nav-Links');

  if (!header || !menuToggle || !navLinks) {
    return;
  }

  const setMenuState = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  if (!menuToggle.hasAttribute('aria-controls')) {
    menuToggle.setAttribute('aria-controls', 'Nav-Links');
  }

  if (!menuToggle.hasAttribute('aria-expanded')) {
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenuState(!navLinks.classList.contains('open'));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.closest('a')) {
      setMenuState(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !header.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });
});
