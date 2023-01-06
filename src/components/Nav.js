import React from "react";
import Header from "./Header";

export default function Nav() {
  return (
    <nav className="navigation">
      <Header />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/contact">Contact Me</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}