import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Pages/Home";
import Catalog from "./components/Pages/Catalog";
import About from "./components/Pages/About";
import Contacts from "./components/Pages/Contacts";
import Cart from "./components/Pages/Cart";
import Page404 from "./components/Pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Pages/Product";

function App() {
  return (
    <Router>
      <Redirect from="/ra_diplom/" to="/" />
      <Header />
      <Switch>
        <Route path="/catalog/:id.html" component={Product} />
        <Route path="/cart.html" component={Cart} />
        <Route path="/contacts.html" component={Contacts} />
        <Route path="/about.html" component={About} />
        <Route path="/catalog.html" component={Catalog} />
        <Route path="/ra_diplom/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
