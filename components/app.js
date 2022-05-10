import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink, useParams, Link,
} from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Counter from './counter';
import Controls from './control';
import Experience from './experience';

function Experiences(props) {
  return (
    <div>
      <div>
        <Experience position="DevOps Intern" org="BMW Group" dates="Jan 2021" />
        <Card>
          <div className="experience-left-column">
            <div className="experience-title">BMW Group</div>
            <div className="bmwi4" />
          </div>
        </Card>
        <Card>

          RWJBarnabas Health          <Button> View the LiveStream </Button>
        </Card>
      </div>
    </div>
  );
}
function Projects(props) {
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

      <Skills />

      <div className="project-item">
        <div className="project-header">
          <div className="project-title"> Healing Together </div>
          <div className="project-completion-details">
            <div className="project-org"> RWJBarnabas Health </div>
            <div className="project-dates"> Summer 2020 </div>
          </div>
        </div>
        <div className="project-img">
          <div className="healingtogethermacbook" />
        </div>
        <div className="project-cta">
          <Link to="healing-together">
            <Button variant="outlined"> View the LiveStream </Button>
          </Link>
        </div>
      </div>
      <Card>
        Healing Together
        <Button> View the LiveStream </Button>
      </Card>
      <Card>
        Healing Together
        <Button> View the LiveStream </Button>
      </Card>
      <div>
        <Counter />
        <Controls />
        <div>Welcome</div>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/healing-together" element={<HealingTogether />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
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
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
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
      <div> SKILLS </div>
      <ul>
        <li> React </li>
        <li> TestCafe </li>
        <li> Python </li>
      </ul>
    </div>
  );
}

export default App;
