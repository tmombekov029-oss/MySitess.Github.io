// --- Переключение темы ---
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// --- Простейший поиск по документации ---
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.textContent.toLowerCase().includes(query)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});
