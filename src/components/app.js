import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink, useParams,
} from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Counter from './counter';
import Controls from './control';

function Experiences(props) {
  return (
    <div>
      <div> All there is to know about me </div>
      <div>
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
      <div className="logo" />
      <div> Burke J. Jaeger </div>
      <div> Sotware Developer </div>
      <div> Research Assistant </div>
      <div> Dartmouth Undergraduate </div>
      <Card>
        Healing Together
        <Button> View the LiveStream </Button>
      </Card>
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

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

export default App;
