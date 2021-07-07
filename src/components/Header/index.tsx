import React from "react";
import "./styles.scss";

export function Header() {
  return (
    <header className="header-container">
      <nav className="container">
        <a className="logo" href="/#">
          beauty<span>salon</span>.
        </a>
        <div className="menu">...</div>
      </nav>
    </header>
  );
}
