import logo from "./logo.svg";
import "./style.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

//component import
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";
import CartScreen from "./Pages/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <Header /> */}
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Yosemite
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
