import './style.css';
import logo from './assets/logo.svg';
import videoPortrait from './assets/video-portrait.png';
import yumspot from './assets/yumspot.png';
import googleDoodle from './assets/google-doodle.png';

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <a href="#home" class="logo">
  <img src="${logo}" alt="Nisrine Assarar logo">
</a>

      <div class="nav-links">
        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  </header>

  <main>
    <section id="home">
      <p>A CREATIVE PRODUCTION BY NISRINE ASSARAR</p>
      <h1>Every Project Tells a Story.</h1>
      <p>Digital design, creative technology & visual storytelling.</p>
      <a href="#projects">EXPLORE MY WORK</a>
    </section>

    <section id="projects" class="projects-section">
      <h2>SELECT A PROJECT</h2>

      <div class="projects-grid">

      <article class="project-card" id="video-project"
         role="button" tabindex="0"
         aria-haspopup="dialog" aria-controls="video-modal">
        <div class="project-image">
            <img src="${videoPortrait}" alt="Video Portrait project">

          <div class="project-overlay">
             <span>AN AUDIOVISUAL PRODUCTION</span>
             <h3>VIDEO PORTRAIT</h3>
             <span>EDITED WITH PREMIERE PRO</span>
          </div>
        </div>

        <h3>VIDEO PORTRAIT</h3>
        <p>AUDIOVISUAL</p>

        </article>

        <article class="project-card">
  <div class="project-image">
    <img src="${yumspot}" alt="YumSpot web application">

    <div class="project-overlay">
      <span>A WEB DEVELOPMENT PROJECT</span>
      <h3>YUMSPOT</h3>
      <span>DISCOVER YOUR NEXT FAVORITE MEAL</span>
    </div>
  </div>

  <h3>YUMSPOT</h3>
  <p>WEB DEVELOPMENT</p>
</article>

        <article class="project-card">
  <div class="project-image">
    <img src="${googleDoodle}" alt="Google Doodle animation">

    <div class="project-overlay">
      <span>AN ANIMATION PROJECT</span>
      <h3>GOOGLE DOODLE</h3>
      <span>CREATED WITH AFTER EFFECTS</span>
    </div>
  </div>

  <h3>GOOGLE DOODLE</h3>
  <p>MOTION DESIGN</p>
</article>

      </div>
    </section>
    <!-- Video Portrait Modal -->
<div id="video-modal" class="project-modal" role="dialog"
     aria-modal="true" aria-labelledby="video-modal-title"
     aria-hidden="true">

  <div class="modal-content">

    <button class="modal-close" type="button" aria-label="Close project">
      &times;
    </button>

    <h2 id="video-modal-title">VIDEO PORTRAIT</h2>

    <div class="modal-video">
  <video controls preload="metadata" playsinline>
    <source src="/videos/video-portrait.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>
</div>

    <div class="modal-details">

  <div class="modal-column">
    <div class="modal-info">
      <h3>CONCEPT</h3>
      <p>A cinematic video portrait capturing a creative personality.</p>
    </div>

    <div class="modal-info">
      <h3>TOOLS</h3>
      <p>Adobe Premiere Pro</p>
    </div>
  </div>

  <div class="modal-column">
    <div class="modal-info">
      <h3>PROCESS</h3>
      <p>Multicam editing, B-roll selection, audio enhancement and colour correction.</p>
    </div>

    <div class="modal-info">
      <h3>RESULT</h3>
      <p>A 45-second video portrait combining interviews and creative visuals.</p>
    </div>
  </div>

</div>

  </div>
</div>
  </main>
`;
// ===== VIDEO PORTRAIT MODAL =====

const videoProject = document.querySelector('#video-project');
const videoModal = document.querySelector('#video-modal');
const closeButton = videoModal.querySelector('.modal-close');

function openVideoModal() {
  videoModal.style.display = 'flex';
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closeVideoModal() {
  const video = videoModal.querySelector('video');
  video?.pause();
  videoModal.style.display = 'none';
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  videoProject.focus();
}

// Ouvrir en cliquant sur la carte
videoProject.addEventListener('click', openVideoModal);

// Ouvrir avec Entrée ou Espace
videoProject.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openVideoModal();
  }
});

// Fermer avec le bouton ×
closeButton.addEventListener('click', closeVideoModal);

// Fermer en cliquant sur le fond sombre
videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

// Fermer avec Échap
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoModal.style.display === 'flex') {
    closeVideoModal();
  }
});