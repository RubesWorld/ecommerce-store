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
    <div className="App">
      <Header />
      <main>
        <div>
          {data.products.map((product) => (
            <div>
              <div className="row center">
                <div className="card">
                  <a href={`/product/${product.id}`}>
                    <img
                      className="medium"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product.id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
              </div>
              {/* <ProductCard key={product.id} product={product} /> */}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
