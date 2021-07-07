import React from "react";
import { ReactSVG } from "react-svg";
import { Menu } from "../../assets/_index";
import { useSidebar } from "../../contexts/SidebarContext";
import "./styles.scss";

export function Header() {
  const { handleToggleSidebarVisibility } = useSidebar();

  return (
    <header className="header-container">
      <nav className="container">
        <a className="logo" href="/#">
          beauty<span>salon</span>.
        </a>
        <ReactSVG
          src={Menu}
          alt="Abrir menu lateral"
          beforeInjection={(svg) => {
            svg.classList.add("icon");
          }}
          onClick={handleToggleSidebarVisibility}
        />
      </nav>
    </header>
  );
}
