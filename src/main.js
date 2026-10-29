import './style.css';

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <a href="#home">LOGO</a>

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
  </main>
`;