import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Catalog from "./components/Pages/Catalog";
import About from "./components/Pages/About";
import Contacts from "./components/Pages/Contacts";
import Cart from "./components/Pages/Cart";
import PageNotFound from "./components/Pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/404.html" component={PageNotFound} />
        <Route path="/cart.html" component={Cart} />
        <Route path="/contacts.html" component={Contacts} />
        <Route path="/about.html" component={About} />
        <Route path="/catalog.html" component={Catalog} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
