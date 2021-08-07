import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
