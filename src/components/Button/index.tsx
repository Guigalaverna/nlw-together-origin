import React, { AnchorHTMLAttributes, ReactNode } from "react";
import "./styles.scss";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <a id="button-container" {...rest}>
      {children}
    </a>
  );
}
