import logo from "./logo.svg";
import "./style.scss";

//component import
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductCard from "./Components/ProductCard";

//data import
import data from "./data.js";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
