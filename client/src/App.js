import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingBar from 'react-top-loading-bar';
import React, { createContext, Suspense, useReducer } from "react";
import { initialState, reducer } from "./reducer/useReducer";
import Spinner from "./components/Spinner";
const Logout = React.lazy(() => import("./components/Logout"))
const About = React.lazy(() => import("./components/About"))
const Contact = React.lazy(() => import("./components/Contact"))
const Home = React.lazy(() => import("./components/Home"))
const Login = React.lazy(() => import("./components/Login"))
const NavBar = React.lazy(() => import("./components/NavBar"))
const Signup = React.lazy(() => import("./components/Signup"))
const NotFoundPage = React.lazy(() => import("./components/NotFoundPage"));

export const UserContext = createContext();

function App() {
  const [progress, setProgress] = React.useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <UserContext.Provider value={{ state, dispatch }}>
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
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route>
              <NotFoundPage loader={loader} />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;
