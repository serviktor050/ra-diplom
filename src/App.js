import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Catalog from "./components/Pages/Catalog";
import About from "./components/Pages/About";
import Contacts from "./components/Pages/Contacts";
import Cart from "./components/Pages/Cart";
import Page404 from "./components/Pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/cart.html" component={Cart} />
        <Route path="/contacts.html" component={Contacts} />
        <Route path="/about.html" component={About} />
        <Route path="/catalog.html" component={Catalog} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
