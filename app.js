const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const searchInput = document.getElementById('searchInput');
const gameCards = [...document.querySelectorAll('.game-card')];
const emptyState = document.getElementById('emptyState');
function filterGames() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let shown = 0;
  gameCards.forEach(card => {
    const match = card.dataset.name.includes(query);
    card.hidden = !match;
    if (match) shown++;
  });
  if (emptyState) emptyState.hidden = shown !== 0;
}
searchInput?.addEventListener('input', filterGames);
document.getElementById('searchForm')?.addEventListener('submit', event => {
  event.preventDefault();
  filterGames();
  document.getElementById('games')?.scrollIntoView({behavior:'smooth'});
});
