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
          svg.classList.add("icon-fill");
        }}
        onClick={handleToggleSidebarVisibility}
      />
      <ul className="grid">
        <li>
          <a onClick={handleToggleSidebarVisibility} href="#home">
            Ínicio
          </a>
        </li>
        <li>
          <a onClick={handleToggleSidebarVisibility} href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a onClick={handleToggleSidebarVisibility} href="#services">
            Serviços
          </a>
        </li>
        <li>
          <a onClick={handleToggleSidebarVisibility} href="#testimonials">
            Depoimentos
          </a>
        </li>
        <li>
          <a onClick={handleToggleSidebarVisibility} href="#contact">
            Contato
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
