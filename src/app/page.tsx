import Image from "next/image";
import Gallery from "@/components/gallery";
import { events, instructors } from "@/data/site";

const navigation = [
  ["About", "#about"],
  ["Instructors", "#instructors"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"]
];

function AcademyBrand() {
  return (
    <a className="brand" href="#home" aria-label="Academy of Martial Arts home">
      <Image
        className="brand-logo"
        src="/images/ama-logo.jpg"
        alt="Academy of Martial Arts Nagpur logo"
        width={64}
        height={64}
        priority
      />
      <span className="brand-name">
        <strong>Academy of Martial Arts</strong>
        <small>Nagpur · Maharashtra</small>
      </span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <AcademyBrand />
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Get in touch <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow light">Discipline · Respect · Excellence</p>
          <h1>Build strength.<br /><em>Shape character.</em></h1>
          <p className="hero-copy">
            Welcome to the Academy of Martial Arts, Nagpur. Explore our
            academy, meet the instructors and follow our events and activities.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#about">Discover AMA</a>
            <a className="text-link light-link" href="#events">Explore events <span>↗</span></a>
          </div>
        </div>
        <div className="hero-side-note">
          <span>ACADEMY OF MARTIAL ARTS</span>
          <span>REG. F-0036368 (NGP.)</span>
        </div>
        <div className="hero-bottom">
          <span>NAGPUR, INDIA</span>
          <span>SHOTOKAN KARATE INTERNATIONAL OF INDIA</span>
        </div>
      </section>

      <section className="intro-strip">
        <p>Martial arts is for humanity &amp; humanity is the base of ideal society &amp; nation.</p>
      </section>

      <section className="section about-section" id="about">
        <div className="section-kicker">01 / ABOUT THE ACADEMY</div>
        <div className="about-grid">
          <div>
            <p className="eyebrow">Our identity</p>
            <h2>A tradition of<br /><em>martial arts.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              Academy of Martial Arts (AMA) is based in Nagpur, Maharashtra.
              The academy’s supplied materials also use the name Karate Do
              Self Defense Academy and state an affiliation with Shotokan
              Karate International of India.
            </p>
            <div className="fact-row">
              <div><strong>AMA</strong><span>Academy</span></div>
              <div><strong>F-0036368</strong><span>Registration no. shown on materials</span></div>
              <div><strong>Nagpur</strong><span>Maharashtra, India</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-band">
        <div className="leadership-label">ACADEMY LEADERSHIP</div>
        <div>
          <h2>Shihan Ramesh Dhapade</h2>
          <p>Black Belt · 5th Dan · Secretary of AMA, Nagpur</p>
        </div>
      </section>

      <section className="section instructors-section" id="instructors">
        <div className="section-heading">
          <p className="eyebrow">The people behind the practice</p>
          <h2>Meet our instructors</h2>
          <p>Instructor names and ranks are presented from the academy materials supplied for this website.</p>
        </div>
        <div className="instructor-grid">
          {instructors.map((instructor, index) => (
            <article className="instructor-card" key={instructor.name + index}>
              <span className="instructor-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="instructor-avatar" aria-hidden="true">{instructor.name.charAt(0)}</div>
              <h3>{instructor.title ? instructor.title + " " : ""}{instructor.name}</h3>
              <p>{instructor.rank}</p>
            </article>
          ))}
        </div>
        <p className="content-note">
          Both Kartik Chavhan and Kartik Chouhan are retained from the supplied
          records pending confirmation whether they refer to one person or two.
          Sohan Dhapade is retained from the earlier academy-confirmed list.
        </p>
      </section>

      <section className="events-section" id="events">
        <div className="section event-heading">
          <p className="eyebrow light">On the academy calendar</p>
          <h2>Events &amp; activities</h2>
          <p>Event information below is transcribed from the supplied 2026 posters.</p>
          <div className="event-list">
            {events.map((event) => (
              <article className="event-card" key={event.number}>
                <span className="event-number">{event.number}</span>
                <div>
                  <p className="event-date">{event.date}</p>
                  <h3>{event.name}</h3>
                  <p>{event.description}</p>
                  <small>{event.venue}</small>
                </div>
                <span className="event-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section className="section contact-section" id="contact">
        <div className="contact-panel">
          <div>
            <p className="eyebrow light">Connect with AMA</p>
            <h2>Start your<br /><em>next chapter.</em></h2>
            <p>
              For academy enquiries, please check back soon. Verified contact
              information will be published here after it is provided by AMA.
            </p>
          </div>
          <div className="contact-side">
            <span className="contact-city">NAGPUR</span>
            <span>MAHARASHTRA · INDIA</span>
            <span>REG. F-0036368 (NGP.)</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <AcademyBrand />
        <p>© {new Date().getFullYear()} Academy of Martial Arts. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
