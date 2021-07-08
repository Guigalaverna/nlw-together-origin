import React from "react";
import { ReactSVG } from "react-svg";
import "./styles.scss";

interface CardProps {
  title: string;
  children: string;
  icon: {
    source: string;
    alt: string;
  };
}

export function Card({ title, children, icon }: CardProps) {
  return (
    <div className="card">
      <ReactSVG
        src={icon.source}
        alt={icon.alt}
        beforeInjection={(svg) => {
          svg.classList.add("icon-fill");
        }}
      />
      <h3 className="title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
