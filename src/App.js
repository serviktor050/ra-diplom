import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Pages/Home";
import Catalog from "./components/Pages/Catalog";
import About from "./components/Pages/About";
import Contacts from "./components/Pages/Contacts";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contacts.html" component={Contacts} />
        <Route path="/about.html" component={About} />
        <Route path="/catalog.html" component={Catalog} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
