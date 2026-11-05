// Acordeon de experiencia laboral (seccion About)
document.querySelectorAll('.exp-row').forEach((row) => {
  row.addEventListener('click', () => {
    const panel = row.nextElementSibling;
    const isOpen = row.getAttribute('aria-expanded') === 'true';

    row.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
  });
});

// Fan de fotos del About: las dos fotos de atras aparecen al scrollear hacia
// abajo y se esconden de nuevo al scrollear hacia arriba
const photoFan = document.querySelector('.about-photo-fan');

if (photoFan) {
  const fanObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        photoFan.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );

  fanObserver.observe(photoFan);
}
