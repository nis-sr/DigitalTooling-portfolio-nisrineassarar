# My Creative Cinema 🎬

**Every Project Tells a Story.**

My Creative Cinema is my personal portfolio website, created for the Digital Tooling course at Erasmus Brussels University of Applied Sciences and Arts (EHB).

The website showcases my creative projects in web development, audiovisual production and motion design. Inspired by cinema, it combines a dark visual identity with interactive elements to create an engaging portfolio experience.

**Live website:** [My Creative Cinema](https://nis-sr.github.io/DigitalTooling-portfolio-nisrineassarar/)

## Up & Running 🏃

To run this project locally:

**1. Clone the repository**

```bash
git clone https://github.com/nis-sr/DigitalTooling-portfolio-nisrineassarar.git
```

**2. Open the project folder**

```bash
cd DigitalTooling-portfolio-nisrineassarar
```

**3. Install the dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in the terminal.

**5. Create a production build**

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Sources 🗃️

### Development tools and documentation

**Vite**

- Website: [https://vite.dev/](https://vite.dev/)
- Used for the development environment and production build.
- Files: `package.json`, `vite.config.js`, `index.html`, `src/main.js`

**GitHub Actions**

- Documentation: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- Used for automatic build and deployment.
- File: `.github/workflows/deploy.yml`

**GitHub Pages**

- Documentation: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- Used to host the portfolio.
- Files: `vite.config.js`, `.github/workflows/deploy.yml`

**Google Fonts**

- Website: [https://fonts.google.com/](https://fonts.google.com/)
- Fonts: Cormorant Garamond and Inter.
- File: `src/style.css`

**TheMealDB**

- Website: [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)
- Used by my separately developed YumSpot application, which is embedded in the portfolio.
- Related file: `src/main.js`
- YumSpot repository: [https://github.com/nis-sr/web-advanced](https://github.com/nis-sr/web-advanced)

### AI Assistance — ChatGPT

ChatGPT (OpenAI) was used as a development assistant throughout the implementation of my portfolio, including help with HTML, CSS, JavaScript, debugging and responsive design.

Some of the main technical challenges where I received assistance were:

**1. GitHub Actions deployment**

I received assistance with setting up the `deploy.yml` workflow to automatically build and deploy my Vite project to GitHub Pages.

- File: `.github/workflows/deploy.yml`
<img width="1961" height="1359" alt="Screenshot 2026-10-30 234317" src="https://github.com/user-attachments/assets/628b8a6a-6aa4-4de5-99b1-f38ca6ce722c" />
**2. Interactive flashlight introduction**

I received assistance with implementing a flashlight effect that follows the mouse and reveals the homepage using CSS `mask-image` and JavaScript pointer events.

- Files: `src/main.js`, `src/style.css`
<img width="1951" height="1375" alt="Screenshot 2026-10-30 234238" src="https://github.com/user-attachments/assets/bf8010dd-b19e-4430-b002-1b5b8abd49e4" />
**3. Interactive project modals**

I received assistance with implementing project pop-ups, keyboard interactions, closing modals and stopping video playback automatically.

- Files: `src/main.js`, `src/style.css`
<img width="1961" height="1361" alt="Screenshot 2026-10-30 234138" src="https://github.com/user-attachments/assets/f2c9bf16-dc77-4f4a-8105-12b31e2b88ac" />
**4. Embedded YumSpot application**

I received assistance with integrating my YumSpot website inside the portfolio using an iframe and adjusting its responsive display.
<i

- Files: `src/main.js`, `src/style.css`
mg width="1958" height="1356" alt="Screenshot 2026-10-30 233749" src="https://github.com/user-attachments/assets/c37c363d-20c3-44e7-b68e-2b213fc62a01" />

**5. Vite configuration**

I received assistance with configuring asset paths for GitHub Pages and resolving issues with video files and deployment.

- Files: `vite.config.js`, `src/main.js`
<img width="1961" height="1417" alt="Screenshot 2026-10-30 233644" src="https://github.com/user-attachments/assets/309760ed-e908-49b5-8575-8228796dd40d" />

### Other resources

**Personal design assets**
- `src/assets/logo.svg` — Logo created for my personal visual identity.
- `src/assets/hero.png` — Visual asset used during the design process.

**About Me photograph**
- Pinterest — https://fr.pinterest.com/pin/868561478156659224/
- File: `src/assets/about-me.jpg`
- Photograph sourced from Pinterest and used in the About Me section.
- Original photographer and reuse permission: Not yet verified.

**Project images**
- `src/assets/video-portrait.png` — Preview image of my Video Portrait project.
- `src/assets/yumspot.png` — Screenshot of my YumSpot web application.
- `src/assets/google-doodle.png` — Preview image of my Google Doodle animation.

**Video Portrait — Music and sound effects**

- Pixabay — https://pixabay.com/
  - Music sourced from Pixabay, credited to FASSounds.
  - Exact track link: Not yet recovered.

- Freesound — https://freesound.org/
  - Keyboard and clap sound effects used in the video.
  - Exact sound links and creators: Not yet recovered.

- Related file: `public/videos/video-portrait.mp4`

**Google Doodle — Sound effects**

All the following sound effects were sourced from Pixabay and used in my Google Doodle animation.

1. [Film special effects cartoon style flying saucer sound](https://pixabay.com/sound-effects/film-special-effects-cartoon-style-flyingsaucer-sound-257591/)
2. [Film special effects extraterrestrial alert sound](https://pixabay.com/sound-effects/film-special-effects-extraterrestrial-alert-sound287337/)
3. [Film special effects iron smash with debris](https://pixabay.com/sound-effects/film-special-effects-iron-smash-with-debris351841/)
4. [Film special effects ovni machine](https://pixabay.com/sound-effects/film-special-effects-ovni-machine-33686/)
5. [Film special effects running on concrete](https://pixabay.com/sound-effects/film-special-effects-running-on-concrete-268478/)
6. [Film special effects whoosh dark tension](https://pixabay.com/sound-effects/film-special-effects-whoosh-dark-tension-386134/)
7. [People kid screaming](https://pixabay.com/sound-effects/people-kid-screaming-329317/)
8. [People out of breath male](https://pixabay.com/sound-effects/people-out-of-breath-male-176715/)
9. [People sigh](https://pixabay.com/sound-effects/people-sigh-100452/)
10. [Spook Theremin — Liecio (2024)](https://pixabay.com/sound-effects/horror-spook-theremin-257588/)

Related file: `public/videos/google-doodle.mp4`

**Design software**

- Figma — https://www.figma.com/
  - Used to create the portfolio's visual identity, wireframes and interactive prototype.

- Adobe Premiere Pro
  - Used to edit the Video Portrait project.

- Adobe After Effects
  - Used to create the Google Doodle animation.

## Project Features

- Cinematic flashlight introduction
- Responsive homepage
- Interactive project cards with hover effects
- Three project pop-ups
- Integrated project videos
- Embedded interactive YumSpot application
- About Me section
- Contact section with email, LinkedIn and GitHub
- Automatic deployment through GitHub Actions

## Technologies

- HTML5
- CSS3
- JavaScript
- Vite
- Git and GitHub
- GitHub Actions
- GitHub Pages

## Design Concept

The concept of My Creative Cinema is based on the idea that every creative project tells its own story.

I created the visual direction and prototype in Figma before developing the website. The design uses dark burgundy backgrounds, gold accents and typography inspired by cinematic aesthetics.

**Typography:**

- Cormorant Garamond — Headings
- Inter — Navigation and body text

## Featured Projects

**Video Portrait** — An audiovisual project edited using Adobe Premiere Pro.

**YumSpot** — An interactive recipe discovery application built with JavaScript and TheMealDB API.

**Google Doodle** — An animated motion design project created with Adobe After Effects.

## Author

**Nisrine Assarar**

- [GitHub](https://github.com/nis-sr)
- [LinkedIn](https://www.linkedin.com/in/nisrine-assarar-605337364/)
