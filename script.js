function playMovie(movieId) {
  const videoSource = document.getElementById('videoSource');
  const player = document.getElementById('moviePlayer');
  videoSource.src = `https://pixeldrain.com/api/file/${movieId}`;
  player.load();
  player.play();
}

const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
  toggleBtn.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});
