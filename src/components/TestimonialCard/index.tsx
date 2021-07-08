import React from "react";
import "./styles.scss";

interface TestimonalCardProps {
  children: string;
  name: string
  avatar: string
}

export function TestimonalCard({ avatar, children, name }: TestimonalCardProps) {
  return (
    <blockquote className="testimonial-card container">
      <p>
      <span>&ldquo;</span>
        {children}
      </p>
      <cite>
        <img src={avatar} alt={name} />
        {name}
      </cite>
    </blockquote>
  );
}
