import React from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Menu } from "../../assets/_index";
import { useSidebar } from "../../contexts/SidebarContext";
import "./styles.scss";

export function Header() {
  const { handleToggleSidebarVisibility } = useSidebar();
  const headerRef = useRef<any>()
  
  useEffect(() => {
    const navHeight = headerRef.current?.offsetHeight
    window.addEventListener('scroll', () => {
      if (window.scrollY >= navHeight) {
        headerRef.current?.classList.add('scroll')
      } else {
        headerRef.current?.classList.remove('scroll')
      }
    })

    return () => window.removeEventListener('scroll', () => {})
  }, [headerRef.current?.offsetHeight])

  return (
    <header ref={headerRef} className="header-container">
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
