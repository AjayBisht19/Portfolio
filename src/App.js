import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Animate from "./components/Animate/Animate.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Animate />
      <Header />
      <Navbar /> <br />
      <Switch>
        <Route exact path="/" component={Education} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </>
  );
}

export default App;
