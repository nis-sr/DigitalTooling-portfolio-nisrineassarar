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

       <article class="project-card">

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
  </main>
`;