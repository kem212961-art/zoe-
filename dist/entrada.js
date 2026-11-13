(() => {
  const loading = document.getElementById('loading-screen');
  const envelope = document.getElementById('envelope-screen');
  const card = document.getElementById('invitation-card');
  const open = document.getElementById('open-invitation');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const music = document.getElementById('birthday-music');
  const musicToggle = document.getElementById('music-toggle');
  function updateMusicControl() {
    musicToggle.setAttribute('aria-label', music.paused ? 'Reproducir música' : 'Pausar música');
    musicToggle.setAttribute('aria-pressed', String(!music.paused));
    musicToggle.textContent = music.paused ? '♫' : 'Ⅱ';
  }
  function playMusic() {
    try {
      const playing = music.play();
      if (playing && typeof playing.catch === 'function') playing.catch(updateMusicControl);
    } catch { updateMusicControl(); }
  }
  music.addEventListener('play', updateMusicControl);
  music.addEventListener('pause', updateMusicControl);
  music.addEventListener('ended', updateMusicControl);
  musicToggle.addEventListener('click', () => {
    if (music.paused) playMusic();
    else music.pause();
  });
  let stage = 'loading';
  function showEnvelope() {
    if (stage !== 'loading') return;
    stage = 'envelope';
    loading.hidden = true;
    envelope.hidden = false;
    document.title = 'Tienes una invitación · Zoe';
    open.focus({ preventScroll: true });
  }
  const lane = document.getElementById('car-lane');
  const car = document.getElementById('loading-car');
  const progress = document.getElementById('loading-progress');
  const percent = document.getElementById('loading-percent');
  const fill = document.getElementById('loading-fill');
  const carImage = document.getElementById('car-image');
  let started = false;
  function startDrive() {
    if (started) return;
    started = true;
    const duration = reduced ? 1400 : 4200;
    let start;
    function frame(now) {
      if (stage !== 'loading') return;
      if (start === undefined) start = now;
      const ratio = Math.min(1, Math.max(0, (now - start) / duration));
      const value = Math.floor(ratio * 100);
      percent.textContent = `${value} %`;
      fill.style.transform = `scaleX(${ratio})`;
      progress.setAttribute('aria-valuenow', String(value));
      if (!reduced) car.style.transform = `translateX(${Math.max(0, lane.clientWidth - car.offsetWidth) * ratio}px)`;
      if (ratio < 1) requestAnimationFrame(frame);
      else setTimeout(showEnvelope, 450);
    }
    requestAnimationFrame(frame);
  }
  if (carImage.complete) startDrive();
  else {
    carImage.addEventListener('load', startDrive, { once: true });
    carImage.addEventListener('error', startDrive, { once: true });
    setTimeout(startDrive, 1500);
  }
  open.addEventListener('click', () => {
    if (stage !== 'envelope') return;
    stage = 'opening';
    // Start from the visitor's tap so mobile browsers allow audio playback.
    music.volume = 0.65;
    playMusic();
    open.disabled = true;
    envelope.classList.add('opening');
    setTimeout(() => {
      envelope.hidden = true;
      card.hidden = false;
      document.body.classList.remove('in-entry');
      document.title = 'Zoe · ¡Mis 5 añitos!';
      stage = 'card';
      document.getElementById('card-title').focus({ preventScroll: true });
      const celebrate = document.getElementById('magic');
      // Reuse the card's confetti without moving visitors away from its top.
      if (matchMedia('(max-width:600px)').matches && !reduced) celebrate.click();
    }, reduced ? 0 : 650);
  });
})();
