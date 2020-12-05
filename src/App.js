import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Sedinte from "./components/Sedinte";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Sedinte" component={Sedinte} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
