import React from "react";

function Header() {
  return (
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
  );
}

export default Header;
