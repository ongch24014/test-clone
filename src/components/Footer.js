import React from "react";
import footerLogo from "../images/footer-logo.png"

export default function Footer() {
  return (
    <footer>
      <section>
        <img src={footerLogo} alt="footer logo" className="footer-img" />
        <section>
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="/contact">Contact Me</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <p>Address</p>
          <p>Number</p>
        </section>

        <section>
          <h3>Social Media Links</h3>
          <p>Facebook</p>
          <p>Twitter</p>
        </section>
      </section>
    </footer>
  )
}