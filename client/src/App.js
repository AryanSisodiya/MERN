import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingBar from 'react-top-loading-bar';
import React, { Suspense } from "react";
import Spinner from "./components/Spinner";
// import About from "./components/About";
const About = React.lazy(() => import("./components/About"))
// import Contact from "./components/Contact";
const Contact = React.lazy(() => import("./components/Contact"))
// import Home from "./components/Home";
const Home = React.lazy(() => import("./components/Home"))
// import Login from "./components/Login";
const Login = React.lazy(() => import("./components/Login"))
// import NavBar from "./components/NavBar";
const NavBar = React.lazy(() => import("./components/NavBar"))
// import Signup from "./components/Signup";
const Signup = React.lazy(() => import("./components/Signup"))

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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>

    </Router>
  );
}

export default App;
