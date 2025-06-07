const cards = document.querySelectorAll('.card');
const content = document.getElementById('project-content');
const title = content.querySelector('h2');
const desc = content.querySelector('p');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if(card.classList.contains('active')) return;

    cards.forEach(c => {
      c.classList.remove('active');
      c.style.opacity = '0.5';
      c.style.width = '100px';
      c.style.transform = 'scale(1)';
      c.style.zIndex = '1';
    });

    card.classList.add('active');
    card.style.opacity = '1';
    card.style.width = '350px';
    card.style.transform = 'scale(1.05)';
    card.style.zIndex = '10';

    title.textContent = card.getAttribute('data-title');
    desc.textContent = card.getAttribute('data-desc');
  });
});


cards[4].click();
