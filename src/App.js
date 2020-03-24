import React from "react";
import MainContent from "./components/maincontent";
import pageData from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const Logo = () => {
  return <img id="logo" src="placeholder.jpeg" alt="Logo"></img>;
};

const Header = () => {
  return (
    <header>
      <Logo />
      <ol>
        <Link to="/">Home</Link>
      </ol>
      <ol>
        <Link to="/regex">Regexes</Link>
      </ol>
      <ol>
        <Link to="/javascript">Javascript</Link>
      </ol>
    </header>
  );
};

const App = () => {
  // console.log(pageData);
  const { home, regex, javascript } = pageData;
  return (
    <Router>
      <div className="App" id="border">
        <Header />
        <Switch>
          <Route path="/javascript">
            <MainContent {...javascript} />
          </Route>
          <Route path="/regex">
            <MainContent {...regex} />
          </Route>
          <Route path="/">
            <MainContent {...home} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
