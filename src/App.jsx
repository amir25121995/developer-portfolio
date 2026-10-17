import "./App.css";

function App() {
  return (
    <main className="site-shell" id="home">
      <nav className="navbar">
        <a className="brand" href="#home">
          AMIR<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            WEB DEVELOPER · ALWAYS LEARNING
          </p>

          <h1>
            Hi, I'm Amir
            <br />
            <span>Ali.</span>
            <br />
            Web Developer.
          </h1>

          <p className="hero-description">
            I'm a web developer with professional experience in PHP,
            CodeIgniter, MySQL, and API development. I'm expanding
            into React and the MERN stack by building practical,
            real-world projects.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span>↘</span>
            </a>

            <a className="button button-quiet" href="#about">
              More about me <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <p>MY APPROACH</p>
              <strong>Thoughtful & practical</strong>
            </div>

            <div>
              <p>MY MINDSET</p>
              <strong>Learn. Build. Improve.</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-core">
            <div className="core-grid" />
            <span className="core-mark">{"</>"}</span>
          </div>

          <div className="floating-card card-top">
            <span className="card-symbol">✳</span>
            <div>
              <strong>Thoughtful design</strong>
              <small>Clarity in every detail</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="code-symbol">{"{ }"}</span>
            <div>
              <strong>Creative development</strong>
              <small>Ideas into experiences</small>
            </div>
          </div>

          <div className="visual-label">
            DESIGN MINDFUL <span>×</span> CODE DRIVEN
          </div>
        </div>
      </section>

      <div className="ticker">
        <span>BUILD WITH PURPOSE</span>
        <i />
        <span>KEEP IT SIMPLE</span>
        <i />
        <span>DETAILS MATTER</span>
        <i />
        <span>ALWAYS IMPROVING</span>
      </div>

      <section className="about-section" id="about">
      <div className="about-heading">
        <p className="eyebrow">
          <span className="status-dot" />
          A LITTLE ABOUT ME
        </p>

        <h2>
          Experience built on
          <br />
          <span>curiosity and growth.</span>
        </h2>

        <p className="about-intro">
          I'm a web developer with hands-on experience building
          database-driven applications, admin panels, and API
          integrations. My foundation is in PHP and CodeIgniter,
          and I'm now expanding my skills with React and the
          MERN stack.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <span className="about-number">01</span>
          <h3>Backend Development</h3>
          <p>
            Developing application logic, database-driven features,
            and API integrations.
          </p>
          <div className="skill-tags">
            <span>PHP</span>
            <span>CodeIgniter</span>
            <span>Laravel</span>
            <span>MySQL</span>
          </div>
        </article>

        <article className="about-card">
          <span className="about-number">02</span>
          <h3>Web Development</h3>
          <p>
            Building responsive interfaces and interactive
            features for web applications.
          </p>
          <div className="skill-tags">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>jQuery</span>
          </div>
        </article>

        <article className="about-card">
          <span className="about-number">03</span>
          <h3>What's Next</h3>
          <p>
            Strengthening my modern JavaScript skills through
            hands-on projects and continuous practice.
          </p>
          <div className="skill-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </article>
      </div>
    </section>

    
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <p className="eyebrow">
          <span className="status-dot" />
          PROFESSIONAL EXPERIENCE
        </p>

        <h2>
          Experience that shaped
          <br />
          <span>how I build.</span>
        </h2>

        <p className="experience-intro">
          My professional background includes PHP development,
          database-driven applications, admin panels, and API
          integrations. I am building on that foundation as I
          expand into modern JavaScript and the MERN stack.
        </p>
      </div>

      <div className="experience-list">
        <article className="experience-item">
          <p className="experience-period">
            NOV 2019 — MAR 2022
          </p>

          <div className="experience-details">
            <h3>Web Developer</h3>
            <p className="experience-company">BNB Software</p>

            <ul>
              <li>
                Developed and maintained CodeIgniter-based
                admin features and database-driven workflows.
              </li>
              <li>
                Used JavaScript, jQuery, and AJAX to build
                interactive features without full-page reloads.
              </li>
              <li>
                Worked on consignment tracking and SMS/email
                notification workflows.
              </li>
            </ul>

            <div className="skill-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>jQuery</span>
              <span>AJAX</span>
            </div>
          </div>
        </article>

        <article className="experience-item">
          <p className="experience-period">
            APR 2022 — JUL 2023
          </p>

          <div className="experience-details">
            <h3>PHP Developer</h3>
            <p className="experience-company">
              Clirnet Services Pvt. Ltd.
            </p>

            <ul>
              <li>
                Worked on an HMVC-based CodeIgniter admin
                application.
              </li>
              <li>
                Worked with token-based APIs and application
                integrations.
              </li>
              <li>
                Used PHP and MySQL to support application
                features and database operations.
              </li>
            </ul>

            <div className="skill-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
              <span>MySQL</span>
              <span>REST APIs</span>
            </div>
          </div>
        </article>
      </div>
    </section>


    <section className="projects-section" id="projects">
  <div className="projects-heading">
    <div>
      <p className="eyebrow">
        <span className="status-dot" />
        WHAT I'M BUILDING
      </p>

      <h2>
        Ideas into
        <br />
        <span>real projects.</span>
      </h2>
    </div>

    <p className="projects-intro">
      My portfolio is live. I'm planning a Task Manager
      and an API Dashboard next. I'll add their live demos
      and source code once the projects are built and deployed.
    </p>
  </div>

  <div className="projects-grid">
    <article className="project-card project-featured">
      <div className="project-art portfolio-art">
        <span className="project-art-label">01 / PERSONAL</span>

        <div className="mini-browser">
          <div className="mini-browser-bar">
            <i />
            <i />
            <i />
            <span>developer-portfolio</span>
          </div>

          <div className="mini-browser-content">
            <span>DEV<span className="mini-accent">.</span></span>
            <strong>Building digital<br />experiences.</strong>
            <div className="mini-browser-line" />
            <div className="mini-browser-line short" />
          </div>
        </div>

        <span className="project-status">LIVE PREVIEW</span>
      </div>

      <div className="project-details">
        <p className="project-category">PROJECT 01</p>
        <h3>Developer Portfolio</h3>
        <p>
          A personal website built from scratch to present
          my experience, skills, and future development work.
        </p>

        <div className="skill-tags">
          <span>React</span>
          <span>Vite</span>
          <span>CSS</span>
        </div>
        <div className="project-links">
        <a
          href="https://developer-portfolio-plum-six.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo ↗
        </a>

        <a
          href="https://github.com/amir25121995/developer-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          View Source ↗
        </a>
      </div>
      </div>
    </article>

    <article className="project-card">
      <div className="project-art task-art">
        <span className="project-art-label">02 / FULL-STACK</span>

        <div className="mock-panel">
          <div className="mock-panel-heading">
            <span>My tasks</span>
            <span className="mock-add">+</span>
          </div>

          <div className="mock-task">
            <i />
            <span>Plan weekly goals</span>
          </div>

          <div className="mock-task">
            <i />
            <span>Review progress</span>
          </div>

          <div className="mock-task faded">
            <i />
            <span>Complete a task</span>
          </div>
        </div>

        <span className="project-status COMING SOON">COMING SOON</span>
        </div>

        <div className="project-details">
          <p className="project-category">PROJECT 02</p>
          <h3>Task Manager</h3>
          <p>
            A full-stack application to create tasks, update
            progress, organise work, and manage user accounts.
          </p>

          <div className="skill-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </article>

      <article className="project-card">
        <div className="project-art api-art">
          <span className="project-art-label">03 / DEVELOPER TOOLS</span>

          <div className="api-window">
            <div className="api-window-heading">
              <span className="api-method">GET</span>
              <span>/api/projects</span>
            </div>

            <pre>{`{
          "status": "success",
          "data": [],
          "message": "Ready to build"
        }`}</pre>
                </div>

                <span className="project-status COMING SOON">COMING SOON</span>
              </div>

              <div className="project-details">
                <p className="project-category">PROJECT 03</p>
                <h3>API Dashboard</h3>
                <p>
                  A dashboard concept for exploring API responses,
                  viewing data, and understanding backend integrations.
                </p>

                <div className="skill-tags">
                  <span>React</span>
                  <span>Express</span>
                  <span>REST API</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              GET IN TOUCH
            </p>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              I'm always interested in discussing web development,
              useful products, and new opportunities to build
              something meaningful.
            </p>
          </div>

          <a
            className="button button-primary contact-button"
            href="mailto:amirali8981@gmail.com?subject=Portfolio%20Inquiry"
          >
            Send me an email <span>↗</span>
          </a>
        </div>

        <footer className="site-footer">
          <a className="brand" href="#home">
            AMIR<span>.</span>
          </a>

          <p>Designed with purpose. Built with code.</p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </footer>
      </section>

      <div className="ticker">
        <span>BUILD WITH PURPOSE</span>
        <i />
        <span>KEEP IT SIMPLE</span>
        <i />
        <span>DETAILS MATTER</span>
        <i />
        <span>ALWAYS IMPROVING</span>
      </div>
    </main>
  );
}

export default App;