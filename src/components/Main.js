import React from "react";
import restaurantfood from "../images/restauranfood.jpg";

export default function Main() {
  return (
    <main>
      <section className="intro">
        <article className="intro-article">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="reserve-btn">Reserve a Table</button>
        </article>
        <img src={restaurantfood} alt="restaurant food" />
      </section>
    </main>
  )
}