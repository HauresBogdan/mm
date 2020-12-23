import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import ThetaHealing from "./components/ThetaHealing";
import Curatare from "./components/Curatare";
import Medidate from "./components/Medidate";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Anxietate from "./components/Anxietate";
import Manifestare from "./components/Manifestare";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/ThetaHealing" component={ThetaHealing} />
          <Route path="/Curatare" component={Curatare} />
          <Route path="/Medidate" component={Medidate} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Anxietate" component={Anxietate} />
          <Route path="/Manifestare" component={Manifestare} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
