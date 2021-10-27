import React from "react";

function Header() {
  return (
    <div className="grid-container">
      <header class="row">
        <div>
          <a href="/" class="brand">
            Yosemite
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign-In</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
