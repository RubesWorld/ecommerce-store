import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Yosemite</h2>
        <div className="right">
          <p>Cart</p>
          <p>Sign-In</p>
        </div>
      </header>
      <section>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
