"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const [preloaderStage, setPreloaderStage] = useState("visible");
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());

    let fadeTimer;
    let removeTimer;

    function hidePreloader() {
      // Keep the original 1.5-second delay and 0.5-second fade.
      fadeTimer = window.setTimeout(() => {
        setPreloaderStage("fading");
        removeTimer = window.setTimeout(() => setPreloaderStage("hidden"), 500);
      }, 1500);
    }

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
    }

    return () => {
      window.removeEventListener("load", hidePreloader);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  function handleMobileNavigation(event) {
    const link = event.target.closest("a");
    if (link) link.closest(".mobile-menu")?.removeAttribute("open");
  }

  return (
    <>
{preloaderStage !== "hidden" && (
<div
  id="preloader"
  className={`fixed inset-0 z-[9999] flex flex-col
         items-center justify-center gap-5
         bg-[#1A112A] transition-opacity
         duration-500${preloaderStage === "fading" ? " opacity-0 pointer-events-none" : ""}`}
>
  {/* Spinner */}
  <div className="w-14 h-14 rounded-full border-[3px]
              border-[#9747FF] border-t-[#FE7F05]
              animate-spin">
  </div>

  {/* Loading text */}
  {/* <h2 class="text-white text-xl font-semibold">
    Loading<span class="text-[#FE7F05]">.</span>
  </h2> */}

  <p className="text-xs tracking-[3px] text-gray-400">
    CREATING SOMETHING AMAZING
  </p>
</div>
)}
  <div className="ambient-orb ambient-orb--purple" aria-hidden="true"></div>
  <div className="ambient-orb ambient-orb--orange" aria-hidden="true"></div>

  <header className="site-header sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
    <div className="mx-auto flex h-[82px] max-w-[1384px] items-center justify-between px-5 sm:px-8 xl:px-0">
      <a href="#home" className="brand-lockup flex shrink-0 items-center gap-3" aria-label="Nasr home">
        {/* <span class="brand-mark" aria-hidden="true"><span></span><i></i></span>
        <span class="font-brand text-[30px] leading-none tracking-wide text-white">Nasr</span>
         */}
        <img src="/Nasr/assets/logo.png" className="w-28 h-28" alt="" />

      </a>

      <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
        <a className="nav-link nav-link--active" href="#home">Home</a>
        <a className="nav-link" href="#skills">Skill</a>
        <a className="nav-link" href="#projects">Projects</a>
        {/* <a class="nav-link" href="#about">About me</a> */}
      </nav>

      <div className="flex items-center gap-3">
        <a href={`${basePath}/assets/My-cv.pdf`} download className="button button--outline hidden sm:inline-flex">
          Get My CV
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.5 13.75v2.5h13v-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>

        <details className="mobile-menu relative md:hidden">
          <summary className="menu-trigger" aria-label="Open navigation menu">
            <span></span><span></span><span></span>
          </summary>
          <nav className="mobile-menu-panel" aria-label="Mobile navigation" onClick={handleMobileNavigation}>
            <a href="#home">Home</a>
            <a href="#skills">Skill</a>
            <a href="#projects">Projects</a>
            {/* <a href="#about">About me</a> */}
            <a href="/Nasr/assets/My-cv.pdf" download className="mobile-cv-link">Get My CV <span>↗</span></a>
          </nav>
        </details>
      </div>
    </div>
  </header>

  <main>
    {/* HERO / ABOUT */}
    <section id="home" className="font-rubik hero-section relative isolate scroll-mt-24">
      <div className="hero-grid-pattern" aria-hidden="true"></div>
      <div dir="rtl" className="mx-auto grid min-h-[800px] max-w-[1384px] grid-cols-1 items-center gap-7 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-4 lg:px-0 lg:pb-24 lg:pt-8">
        <div className="hero-visual relative mx-auto mt-5 h-[510px] w-full max-w-[650px] sm:h-[610px] lg:mt-0 lg:h-[720px] lg:max-w-none">
          <div className="portrait-halo" aria-hidden="true"></div>
          <div className="portrait-frame" aria-hidden="true"></div>

          <img src="/Nasr/assets/aliimg.png"  alt="Illustrated portrait of Alireza wearing an orange jacket" className="hero-portrait" />
          <div className="availability-pill"><span className="availability-dot"></span> Available for new projects</div>
          <div className="floating-code-card floating-code-card--top" aria-hidden="true">
            <span className="code-card-dots"><i></i><i></i><i></i></span>
            <span className="code-card-line code-card-line--long"></span>
            <span className="code-card-line code-card-line--short"></span>
          </div>
          <div className="floating-code-card floating-code-card--bottom" aria-hidden="true">
            <span className="code-card-symbol">{"{ }"}</span>
            <span><b>Clean code</b><small>Built to scale</small></span>
          </div>

          {/* <div class="hero-stats grid grid-cols-3 gap-2 sm:gap-3">
            <div class="stat-card"><strong>5<span>+</span></strong><small>Years<br />Experience</small></div>
            <div class="stat-card"><strong>15<span>+</span></strong><small>Completed<br />Projects</small></div>
            <div class="stat-card"><strong>∞</strong><small>Curiosity<br />to learn</small></div>
          </div> */}
        </div>
       
       
        <div id="about" dir="ltr" className="hero-copy relative z-10 max-w-[790px] scroll-mt-28   max-lg:mx-auto  max-xl:ml-4">
          <p className=" mb-4  items-center text-[clamp(1.7rem,3.3vw,2.5rem)] gap-3 font-rubik "> HELLO, I'M</p>
          <h1 className="font-rubik text-5xl font-bold leading-[.98] tracking-[-.065em] text-gradient " style={{ fontSize: "5rem" }}>Alireza</h1>
          <h2 className="mt-7 max-w-[730px] text-[clamp(1.7rem,3.3vw,2.5rem)] font-normal leading-[1.3] text-white">
            <span className="text-gradient">
                Web Developer
            </span> crafting <span className="">fast, accessible and delightful experiences.</span>
          </h2>
          <p className="mt-6 max-w-[730px] font-rubik text-lg font-light leading-[1.85] text-white/65 sm:text-xl">
            Building modern web applications with a passion for performance, clean architecture, and delightful user experiences.
          </p>

          <div className="mt-9 flex flex-wrap max-lg:justify-center items-center gap-4">
            <a href="mailto:ali.devvnasr@gmail.com" className="button button--primary">
              Let's Work Together
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/Nasr/assets/My-cv.pdf" download className="button button--ghost">Download CV  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.5 13.75v2.5h13v-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>

          {/* <div class="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-white/60">
            <a class="social-link" href="#contact" aria-label="GitHub profile"><span class="social-icon">GH</span><span>GitHub</span></a>
            <a class="social-link" href="#contact" aria-label="LinkedIn profile"><span class="social-icon">in</span><span>LinkedIn</span></a>
            <a class="social-link" href="#contact" aria-label="Email Alireza"><span class="social-icon">@</span><span>Email</span></a>
          </div> */}
        </div>

       
      </div>
      <div className="flex justify-center -mt-28 max-xl:mt-1">

        <div className="mr-2"> 
          <a
          href="https://www.linkedin.com/in/alireza-nasr/"
          target="_blank"
          className="w-16 h-16 rounded-full bg-[rgba(151,71,255,.09)] flex items-center justify-center border-2 border-[rgba(151,71,255,.15)]
                text-white hover:border-[rgba(151,71,255,.95)] button
                hover:from-[#FFE052] hover:to-[#FE7F05]
                hover:text-white transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
        
        </div>

        <div className="mr-2"> 
          <a
          href="https://instagram.com/Allirezanasri"
          target="_blank"
          className="w-16 h-16 rounded-full bg-[rgba(151,71,255,.09)] flex items-center justify-center border-2 border-[rgba(151,71,255,.15)]
                text-white hover:border-[rgba(151,71,255,.95)] button
                hover:from-[#FFE052] hover:to-[#FE7F05]
                hover:text-white transition-all duration-300"
          >
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
        
        </div>
      
        <div className="mr-2"> 
          <a
          href="#"
          target="_blank"
          className="w-16 h-16 rounded-full bg-[rgba(151,71,255,.09)] flex items-center justify-center border-2 border-[rgba(151,71,255,.15)]
                text-white hover:border-[rgba(151,71,255,.95)] button
                hover:from-[#FFE052] hover:to-[#FE7F05]
                hover:text-white transition-all duration-300"
          >
            <i className="fa-brands fa-pinterest text-2xl"></i>
          </a>
        
        </div>
      
        <div className="mr-2"> 
          <a
          href="https://github.com/Alli1378"
          target="_blank"
          className="w-16 h-16 rounded-full bg-[rgba(151,71,255,.09)] flex items-center justify-center border-2 border-[rgba(151,71,255,.15)]
                text-white hover:border-[rgba(151,71,255,.95)] button
                hover:from-[#FFE052] hover:to-[#FE7F05]
                hover:text-white transition-all duration-300"
          >
            <i className="fa-brands fa-github text-2xl bg-[rgba(151,71,255,.95)"></i>
          </a>
        
        </div>
      
        <div className="mr-2"> 
          <a
          href="mailto:ali.devvnasr@gmail.com"
          target="_blank"
          className="w-16 h-16 rounded-full bg-[rgba(151,71,255,.09)] flex items-center justify-center border-2 border-[rgba(151,71,255,.15)]
                text-white hover:border-[rgba(151,71,255,.95)] button
                hover:from-[#FFE052] hover:to-[#FE7F05]
                hover:text-white transition-all duration-300"
          >
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
        
        </div>
                  
      </div>
    </section>

    {/* SKILLS */}
    <section id="skills" className="section-wrap scroll-mt-24">
      <div className="section-heading text-center">
        <span className="section-kicker">WHAT I DO</span>
        <h2>Core <span>Expertise</span></h2>
        <p>From the first line of code to a reliable production deployment.</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1384px] grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-3 xl:px-0">
        <article className="skill-card group">
          <div className="skill-card-top">
            <span className="skill-icon skill-icon--orange" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none"><path d="M18 14 8 24l10 10M30 14l10 10-10 10M27 9l-6 30" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="skill-level">Level <b>90%</b></span>
          </div>
          <h3>Back End</h3>
          <p>I design dependable server-side systems, APIs, and data flows that keep applications secure and maintainable.</p>
          <div className="skill-progress"><span style={{ width: "90%" }}></span></div>
          <div className="skill-tags"><span>Python</span><span>Django</span><span>DRF</span><span>PostgreSQL</span></div>
        </article>

        <article className="skill-card group">
          <div className="skill-card-top">
            <span className="skill-icon skill-icon--purple" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none"><rect x="7" y="8" width="34" height="32" rx="5" stroke="currentColor" strokeWidth="2.5"/><path d="M7 17h34M15 12.5h.02M21 12.5h.02M17 27l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="skill-level">Level <b>80%</b></span>
          </div>
          <h3>Front End</h3>
          <p>I turn product ideas into responsive interfaces with thoughtful details, accessibility, and smooth interactions.</p>
          <div className="skill-progress skill-progress--purple"><span style={{ width: "80%" }}></span></div>
          <div className="skill-tags"><span>React</span><span>Next.js</span><span>JavaScript</span><span>Tailwind CSS</span></div>
        </article>

        <article className="skill-card group">
          <div className="skill-card-top">
            <span className="skill-icon skill-icon--orange" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none"><path d="M24 6 39 14v20l-15 8L9 34V14l15-8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="m9.5 14.5 14.5 8 14.5-8M24 23v18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>
            </span>
            <span className="skill-level">Level <b>40%</b></span>
          </div>
          <h3>DevOps</h3>
          <p>I work with deployment workflows and server infrastructure to make releases repeatable and applications dependable.</p>
          <div className="skill-progress"><span style={{ width: "40%" }}></span></div>
          <div className="skill-tags"><span>Docker</span><span>Linux</span><span>Nginx</span><span>Git</span></div>
        </article>
      </div>
    </section>

    {/* WHY WORK WITH ME */}
    <section className="section-wrap section-wrap--why">
      <div className="mx-auto grid max-w-[1384px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.5fr] lg:items-center lg:px-0">
        <div className="why-title-block">
          {/* <span class="section-kicker">THE WAY I WORK</span> */}
          <div className="flex justify-end align-center max-lg:justify-center  ">
            <h2>Why Work<br />With <span>Me?</span></h2>

            <img className="hidden-when-mobile" src="/Nasr/assets/arrow.png" alt="AI support assistant interface with a 40 percent time reduction metric" loading="lazy" />
          </div>
          
        </div>
        <div className="why-list">
          <article className="why-item">
            {/* <span class="why-number">01</span> */} 
            <img className="why-number" src="/Nasr/assets/comin.png" alt="" />
            <div><h3>Clear Communication</h3><p>Transparent updates and smooth collaboration throughout the project.</p></div>
            <span className="why-check" aria-hidden="true">↗</span>
          </article>
          <article className="why-item">
            <img className="why-number" src="/Nasr/assets/time.png" alt="" />
            <div><h3>On-Time Delivery</h3><p>Clear timelines and reliable delivery — no surprises.</p></div>
            <span className="why-check" aria-hidden="true">↗</span>
          </article>
          <article className="why-item">
            <img className="why-number" src="/Nasr/assets/code.png" alt="" />
            <div><h3>Clean &amp; Scalable Code</h3><p>Web applications designed for performance and future growth.</p></div>
            <span className="why-check" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>
    </section>

    {/* PROJECTS */}
    <section id="projects" className="section-wrap projects-section scroll-mt-24">
      <div className="section-heading text-center">
        <span className="section-kicker">A FEW THINGS I'VE BUILT</span>
        <h2>Selected <span>Projects</span></h2>
        <p>A mix of AI-powered products, computer-vision tools, and web experiences.</p>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1384px] flex-col gap-5 px-5 sm:px-8 xl:px-0">
       <article className="project-card" dir="rtl">
          <div className="project-copy" dir="ltr">
        
            <div className="project-meta"><span className="project-index">01</span><span className="project-category">AI SOLUTION</span></div>
            <h3>Built an AI assistant that reduced technical support time by 40%.</h3>
            <p>This project focuses on creating an LLM-driven assistant that gives technicians immediate, context-specific support using product manuals and technical documentation.</p>
            <div className="project-tags"><span>AI Assistant</span><span>LLM</span><span>Knowledge Base</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/AI%20Assistant%20Cuts%20Support%20Time%2040%25.png" alt="AI support assistant interface with a 40 percent time reduction metric" loading="lazy" /></div>
        </article>

        <article className="project-card" dir="rtl">
          <div className="project-copy" dir="ltr">
        
            <div className="project-meta"><span className="project-index">02</span><span className="project-category">COMPUTER VISION</span></div>
            <h3>HDetect <span className="project-subtitle">(Object Detection)</span></h3>
            <p>The HDetect intrusion-detection software provides a reliable solution for surveillance and theft prevention in apartments, gardens, industrial centers, offices, and commercial spaces.</p>
            <div className="project-tags"><span>Object Detection</span><span>AI</span><span>Real-time</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/HDetect%20Neon%20Object%20Detection.png" alt="HDetect object detection interface identifying objects in a camera view" loading="lazy" /></div>
        </article>

        <article className="project-card" dir="rtl">
          <div className="project-copy" dir="ltr">
            <div className="project-meta"><span className="project-index">03</span><span className="project-category">COMPUTER VISION</span></div>
            <h3>HFace <span className="project-subtitle">(Face Recognition)</span></h3>
            <p>A face-recognition solution designed to support fast identity checks and secure access-control workflows.</p>
            <div className="project-tags"><span>Face Recognition</span><span>Security</span><span>Computer Vision</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/Neon%20Face%20Recognition%20Access%20Granted.png" alt="HFace facial recognition interface showing access granted" loading="lazy" /></div>
        </article>

        <article className="project-card" dir="rtl">
          <div className="project-copy" dir="ltr">
            <div className="project-meta"><span className="project-index">04</span><span className="project-category">COMPUTER VISION</span></div>
            <h3>HPlate <span className="project-subtitle">(License Plate Recognition)</span></h3>
            <p>The HPlate license-plate recognition software offers a reliable solution for managing and monitoring vehicle traffic.</p>
            <div className="project-tags"><span>License Plate</span><span>Recognition</span><span>Automation</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/Neon%20License%20Plate%20Recognition%20Dashboard.png" alt="HPlate license plate recognition dashboard and camera view" loading="lazy" /></div>
        </article>

        <article className="project-card project-card--progress" dir="rtl">
          <div className="project-copy" dir="ltr">
            <div className="project-meta"><span className="project-index">05</span><span className="project-category project-category--progress">IN DEVELOPMENT</span></div>
            <h3>Naghdeto <span className="project-subtitle">(Anonymous Q&amp;A Platform)</span></h3>
            <p>A platform for anonymous questions, answers, and feedback, allowing people to communicate through text or voice.</p>
            <div className="project-tags"><span>Anonymous</span><span>Q&amp;A</span><span>Voice &amp; Text</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/Askly%20Anonymous%20Feedback%20Platform.png" alt="Naghdeto anonymous question and feedback platform concept" loading="lazy" /></div>
        </article>

        <article className="project-card" dir="rtl">
          <div className="project-copy" dir="ltr">
        
            <div className="project-meta"><span className="project-index">06</span><span className="project-category">WEB DESIGN</span></div>
            <h3>MirCode <span className="project-subtitle">(Team Website)</span></h3>
            <p>A website introducing the Mircode group: its team members, projects, activities, and latest news.</p>
            <div className="project-tags"><span>Website</span><span>Team</span><span>Portfolio</span></div>
          </div>
          <div className="project-image"><img src="/Nasr/assets/Mircode%20Futuristic%20Team%20Showcase.png" alt="MirCode group website homepage preview" loading="lazy" /></div>
        </article>
      </div>
    </section>

    {/* CONTACT */}
    <section id="contact" className="contact-section scroll-mt-24">
      <div className="contact-glow" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1100px] px-5 py-24 text-center sm:px-8">
        <span className="section-kicker">HAVE AN IDEA?</span>
        <h2>Let's build something <span>great.</span></h2>
        <p>Have a project, an opportunity, or just want to talk about technology? My inbox is open.</p>
        {/* Replace YOUR_EMAIL@example.com with your real email address. */}
        <a href="mailto:ali.devvnasr@gmail.com" className="button button--primary mt-8">Let's Work Together <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main>

  <footer className="site-footer border-t border-white/10">
    <div className="mx-auto flex max-w-[1384px] flex-col items-center justify-between gap-4 px-5 py-7 text-center text-sm text-white/45 sm:px-8 md:flex-row xl:px-0">
       <a href="#home" className="brand-lockup flex shrink-0 items-center gap-3" aria-label="Nasr home">
        <img src="/Nasr/assets/logo.png" className="w-28 h-28" alt="" />
        {/* <span class="font-brand text-[30px] leading-none tracking-wide text-white ">Nasr</span> */}
      </a>

      <p>Designed with purpose. Built with care.</p>
      <p>© <span id="year">{year}</span> Alireza Nasr. All rights reserved.</p>
    </div>
  </footer>
    </>
  );
}
