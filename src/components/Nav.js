import React, { useEffect } from "react";
import Header from "./Header";

export default function Nav() {
  useEffect(() => {
    const primaryNav = document.querySelector(".navigation");
    const navToggle = document.querySelector(".hamburger");

    navToggle.addEventListener('click', () => {
      const visibility = primaryNav.getAttribute('data-visible');

      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
      }
    });

    return (() => {
      // navToggle.removeEventListener('click')
    })
  })

  return (
    <section className="nav-section">
      <Header />
      <nav>
        <ul id="primary-navigation" className="navigation" data-visible="false">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservation">Reservations</a></li>
          <li><a href="/contact">Contact Me</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <button className="hamburger" aria-controls="primary-navigation" aria-expanded="false"></button>
    </section>
  )
}