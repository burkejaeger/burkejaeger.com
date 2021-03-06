import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink, useParams, Link,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import HistoryIcon from '@mui/icons-material/History';
import BiotechIcon from '@mui/icons-material/Biotech';
// import { pdfFile } from '../../public/fms.pdf';

function Experiences(props) {
  return (
    <div>
      <div>
        Coming Soon
      </div>
    </div>
  );
}
function Projects(props) {
  return (
    <div>

      <AboutBurke />
      <div className="section-title"> Projects </div>

      <FMS />
      <CF />
      <HT />

      <Skills />

      <div />
    </div>
  );
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/healing-together" element={<HealingTogether />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact="true">Projects</NavLink></li>
        <li><NavLink to="/experiences">Experiences</NavLink></li>
      </ul>
    </nav>
  );
}

function HealingTogether(props) {
  return (
    <a href="https://vimeo.com/450206552/0aa866fe8e">
      <Button>View on Vimeo </Button>
    </a>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function Skills(props) {
  return (
    <div>
      <div className="section-title"> Skills </div>
      <ul>
        <li className="skill"> React </li>
        <li className="skill"> Software Testing and Automation </li>
        <li className="skill"> Python </li>
        <li className="skill"> Natural Language Processing </li>
      </ul>
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <div className="dev-header">
        <div className="logo-wrapper">
          <div className="logo" />
        </div>
        <div className="header-text">
          <div className="my-name"> Burke J. Jaeger </div>
          <ul className="titles">
            <li className="my-title"> Sotware Engineer </li>
            <li className="my-title"> Research Assistant </li>
            <li className="my-title"> Dartmouth Undergraduate </li>
          </ul>

        </div>

      </div>
      <Socials />
    </div>

  );
}

function Footer(props) {
  return (
    <div> Developed by Burke J. Jaeger</div>
  );
}

function FMS(props) {
  return (
    <div className="project-item">
      <div className="project-header">
        <div className="project-title"> Field Management System 3.0 </div>
        <div className="project-completion-details">
          <div className="project-org"> BMW Group </div>
          <div className="project-dates"> Winter 2022 </div>
        </div>
      </div>
      <div className="project-display">
        <div className="project-img">
          <div className="fmslaptop" />
        </div>
        <div className="project-cta">
          <div className="project-description"> Relations Management web application for documenting and tracking Corporate Field Managers and Dealer Networks. The MVP release, of which I was a part,
            involved documenting and storing logs and file attachments for interactions
          </div>
          <a href="https://drive.google.com/file/d/1VAbOWBdbldeDdKVYVyDx3PgGlG-HsbId/view?usp=sharing" target="_blank" rel="noreferrer">
            <button type="button" label="Download FMS Project Summary" className="project-button">
              Download FMS Project Summary
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function CF(props) {
  return (
    <div className="project-item">
      <div className="project-header">
        <div className="project-title"> ChargeForward</div>
        <div className="project-completion-details">
          <div className="project-org"> BMW Group </div>
          <div className="project-dates"> Winter 2022 </div>
        </div>
      </div>
      <div className="project-display">
        <div className="project-img">
          <div className="cfmacbook" />
        </div>
        <div className="project-cta">
          <div className="project-description"> A web and mobile application created in collaboration between BMW Group&#39;s electric vehicle division and regional energy companies.
            ChargeForward excutes vehicle charging schedules in line with off-peak times for electrical grids, allowing for
            reduced enviornmental impact of EV ownerships and cost savings on energy production. The charge station locator,
            of which I was a part of development, helps drivers locate nearby charging options via geo-hashing.
          </div>
          <a href="https://www.bmwchargeforward.com/">
            <button type="button" label="Go To ChargeForward" className="project-button">
              Go to ChargeForward
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function HT(props) {
  return (
    <div className="project-item">
      <div className="project-header">
        <div className="project-title"> Healing Together </div>
        <div className="project-completion-details">
          <div className="project-org"> RWJBarnabas Health </div>
          <div className="project-dates"> Summer 2020 </div>
        </div>
      </div>
      <div className="project-display">
        <div className="project-img">
          <div className="healingtogethermacbook" />
        </div>
        <div className="project-cta">
          <Link to="healing-together">
            <button type="button" label="View Remembering Together" className="project-button">
              View the LiveStream
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutBurke(props) {
  return (
    <div>
      <div className="section-title"> About Me </div>
      <div className="skills-bio">
        <ul className="about-burke-ul">
          <li className="about-burke"><LocationCityIcon />  Palo Alto + New York </li>
          <li className="about-burke"><AlternateEmailIcon />  <a href="mailto:b.23@dartmouth.edu">b.23@dartmouth.edu </a></li>
          <li className="about-burke"><SchoolIcon />  Computer Science </li>
          <li className="about-burke"><WorkIcon />  VMWare </li>
          <li className="about-burke"><HistoryIcon />  BMW Group </li>
          <li className="about-burke"><BiotechIcon />  Persist Lab (NLP) </li>
        </ul>
        <Bio />
      </div>
    </div>

  );
}

function Socials(props) {
  return (
    <ul className="socials-icons">
      <a href="https://github.com/burkejaeger/" label="GitHub"><li><GitHubIcon fontSize="extra-extra-large" className="social-icon" /></li></a>
      <a href="https://www.instagram.com/burkejaeger/" label="Instagram"><li><InstagramIcon fontSize="extra-extra-large" className="social-icon" /></li></a>
      <a href="https://www.instagram.com/streamgasmoney/" label="Stream Gas Money"><li><PodcastsIcon fontSize="extra-extra-large" className="social-icon" /></li></a>
      <a href="http://gasmoneymedia.com/" label="Gas Money Media"><li><DirectionsCarIcon fontSize="extra-extra-large" className="social-icon" /></li></a>
      <a href="https://www.linkedin.com/in/burkejaeger/" label="LinkedIn"><li><LinkedInIcon fontSize="extra-extra-large" className="social-icon" /></li></a>
    </ul>
  );
}

function Bio(props) {
  return (
    <div className="bio-text"> Hi, I&#39;m Burke! I am passionate about real-world applications of the latest
      technology in order to solve today&#39;s problems, whether through web development, powerful automations, or communication. Incoming SWE Intern @ VMWare, formerly DevOps @ BMW Group.
    </div>
  );
}

export default App;
