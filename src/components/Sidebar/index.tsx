import cx from "classnames";
import React from "react";
import { ReactSVG } from "react-svg";
import { Close } from "../../assets/_index";
import { useSidebar } from "../../contexts/SidebarContext";
import "./styles.scss";

export function Sidebar() {
  const { isVisible, handleToggleSidebarVisibility } = useSidebar();

  return (
    <div className={cx("sidebar-container", { show: isVisible })}>
      <ReactSVG
        src={Close}
        alt="Fechar barra lateral"
        beforeInjection={(svg) => {
          svg.classList.add("icon");
        }}
        onClick={handleToggleSidebarVisibility}
      />
      <ul className="grid">
        <li>
          <a href="#home">Ínicio</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
