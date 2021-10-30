import logo from "./logo.svg";
import "./style.scss";
import { BrowserRouter, Route } from "react-router-dom";

//component import
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Pages/HomeScreen";
import ProductScreen from "./Pages/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <Header /> */}
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
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
