import './style.css';
import logo from './assets/logo.svg';
import videoPortrait from './assets/video-portrait.png';
import yumspot from './assets/yumspot.png';
import googleDoodle from './assets/google-doodle.png';
import aboutMe from './assets/about-me.jpg';

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

        <article class="project-card" id="yumspot-project"
         role="button" tabindex="0"
         aria-haspopup="dialog" aria-controls="yumspot-modal">
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

        <article class="project-card" id="doodle-project"
         role="button" tabindex="0"
         aria-haspopup="dialog" aria-controls="doodle-modal">
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

    <!-- ===== ABOUT ME ===== -->

<section id="about" class="about-section">

  <h2>ABOUT ME</h2>

  <div class="about-container">

    <div class="about-image">
      <img src="${aboutMe}" alt="Creative workspace with laptop and desk accessories">
    </div>

    <div class="about-content">

      <h3>Hi, I'm Nisrine.</h3>

      <p>
        I'm a creative digital designer passionate about technology,
        visual storytelling and interactive experiences.
      </p>

      <p>
        I enjoy combining design and technology to create engaging
        and intuitive digital experiences.
      </p>

      <h4>MY SKILLS</h4>

      <div class="skills-list">
        <span>Web Design</span>
        <span>Visual Design</span>
        <span>Video Editing</span>
        <span>UI/UX</span>
      </div>

    </div>

  </div>

</section>

<!-- ===== CONTACT SECTION ===== -->

<section id="contact" class="contact-section">

  <div class="contact-content">

    <h2>Let's Create Something Together.</h2>

    <p>
      Have a project in mind or want to collaborate?
      Let's talk.
    </p>

    <a href="mailto:TON-EMAIL@exemple.com" class="contact-button">
      GET IN TOUCH
    </a>

    <div class="contact-links">
  <a href="mailto:nisrine.assarar@hotmail.com">EMAIL</a>
  <a href="https://github.com/nis-sr"
     target="_blank"
     rel="noopener noreferrer">
    GITHUB
  </a>
</div>

    <p class="copyright">© 2026 NISRINE ASSARAR</p>

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
  </div>
</div>

<!-- ===== YUMSPOT MODAL ===== -->

<div id="yumspot-modal" class="project-modal"
     role="dialog"
     aria-modal="true"
     aria-labelledby="yumspot-modal-title"
     aria-hidden="true">

  <div class="modal-content">

    <button class="modal-close" type="button" aria-label="Close YumSpot project">
      &times;
    </button>

    <h2 id="yumspot-modal-title">YUMSPOT</h2>

    <div class="modal-preview">
    <iframe
    src="https://nis-sr.github.io/web-advanced/"
    title="YumSpot interactive recipe application"
    loading="lazy"
    allowfullscreen>
  </iframe>
    </div>

    <div class="modal-details">

      <div class="modal-column">

        <div class="modal-info">
          <h3>CONCEPT</h3>
          <p>A recipe discovery web application powered by TheMealDB API.</p>
        </div>

        <div class="modal-info">
          <h3>TOOLS</h3>
          <p>JavaScript, Web Development, TheMealDB API</p>
        </div>

      </div>

      <div class="modal-column">

        <div class="modal-info">
          <h3>PROCESS</h3>
          <p>API integration, recipe search, filtering, sorting and favorites functionality.</p>
        </div>

        <div class="modal-info">
          <h3>RESULT</h3>
          <p>An interactive single-page application for discovering and saving recipes.</p>
        </div>

      </div>

    </div>

    <a
  class="modal-project-button"
  href="https://nis-sr.github.io/web-advanced/"
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW PROJECT
  </a>

  </div>
</div>
<!-- ===== GOOGLE DOODLE MODAL ===== -->

<div id="doodle-modal" class="project-modal"
     role="dialog"
     aria-modal="true"
     aria-labelledby="doodle-modal-title"
     aria-hidden="true">

  <div class="modal-content">

    <button class="modal-close" type="button"
            aria-label="Close Google Doodle project">
      &times;
    </button>

    <h2 id="doodle-modal-title">GOOGLE DOODLE</h2>

    <div class="modal-video">
      <video controls preload="metadata" playsinline>
        <source src="/videos/google-doodle.mp4" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </div>

    <div class="modal-details">

      <div class="modal-column">

        <div class="modal-info">
          <h3>CONCEPT</h3>
          <p>An animated Google Doodle featuring playful alien characters.</p>
        </div>

        <div class="modal-info">
          <h3>TOOLS</h3>
          <p>Adobe After Effects</p>
        </div>

      </div>

      <div class="modal-column">

        <div class="modal-info">
          <h3>PROCESS</h3>
          <p>Character animation, motion design and visual composition.</p>
        </div>

        <div class="modal-info">
          <h3>RESULT</h3>
          <p>A short animated Google Doodle.</p>
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

// ===== YUMSPOT MODAL =====

const yumspotProject = document.querySelector('#yumspot-project');
const yumspotModal = document.querySelector('#yumspot-modal');
const yumspotCloseButton = yumspotModal.querySelector('.modal-close');

function openYumspotModal() {
  yumspotModal.style.display = 'flex';
  yumspotModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  yumspotCloseButton.focus();
}

function closeYumspotModal() {
  yumspotModal.style.display = 'none';
  yumspotModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  yumspotProject.focus();
}

// Ouvrir en cliquant sur YumSpot
yumspotProject.addEventListener('click', openYumspotModal);

// Ouvrir avec Entrée ou Espace
yumspotProject.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openYumspotModal();
  }
});

// Fermer avec le bouton ×
yumspotCloseButton.addEventListener('click', closeYumspotModal);

// Fermer en cliquant sur le fond sombre
yumspotModal.addEventListener('click', (event) => {
  if (event.target === yumspotModal) {
    closeYumspotModal();
  }
});

// Fermer avec Échap
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && yumspotModal.style.display === 'flex') {
    closeYumspotModal();
  }
});

// ===== GOOGLE DOODLE MODAL =====

const doodleProject = document.querySelector('#doodle-project');
const doodleModal = document.querySelector('#doodle-modal');
const doodleCloseButton = doodleModal.querySelector('.modal-close');

function openDoodleModal() {
  doodleModal.style.display = 'flex';
  doodleModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  doodleCloseButton.focus();
}

function closeDoodleModal() {
  const video = doodleModal.querySelector('video');
  video?.pause();

  doodleModal.style.display = 'none';
  doodleModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  doodleProject.focus();
}

// Ouvrir au clic
doodleProject.addEventListener('click', openDoodleModal);

// Ouvrir avec Entrée ou Espace
doodleProject.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openDoodleModal();
  }
});

// Fermer avec ×
doodleCloseButton.addEventListener('click', closeDoodleModal);

// Fermer en cliquant sur le fond sombre
doodleModal.addEventListener('click', (event) => {
  if (event.target === doodleModal) {
    closeDoodleModal();
  }
});

// Fermer avec Échap
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && doodleModal.style.display === 'flex') {
    closeDoodleModal();
  }
});