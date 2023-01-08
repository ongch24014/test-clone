import React, { useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservations</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <button className="hamburger" aria-controls="primary-navigation" aria-expanded="false"></button>
    </section>
  )
}