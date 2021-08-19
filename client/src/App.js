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
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingBar from 'react-top-loading-bar';
import React from "react";

function App() {
  const [progress, setProgress] = React.useState(0);
  function loader() {
    setProgress(100)
  }

  return (
    <Router>
      <LoadingBar
        color='#2d3436'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={2.5}
      />
      <NavBar loader={loader} />
      <Switch>
        <Route exact path="/">
          <Home loader={loader} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact loader={loader} />
        </Route>
        <Route exact path="/signin">
          <Login loader={loader} />
        </Route>
        <Route exact path="/register">
          <Signup loader={loader} />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
