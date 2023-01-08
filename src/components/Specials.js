import React from 'react'
import salad from '../images/salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import dessert from '../images/dessert.jpg'

function Specials() {
  return (
    <section className='specials-section'>
      <h1>This weeks specials!</h1>
      <button className='menu-btn main-btn'>Online Menu</button>
      <section className='special-card-section'>
        <div className='special-card'>
          <img src={salad} alt='salad' />
          <div className='name_price'>
            <h2>Greek Salad</h2>
            <p>$12.00</p>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style</p>
          <button>Order for delivery</button>
        </div>

        <div className='special-card'>
          <img src={bruchetta} alt='bruchetta' />
          <div className='name_price'>
            <h2>Bruchetta</h2>
            <p>$5.99</p>
          </div>
          <p>Our Bruschetta is made from grilled beat that has been </p>
          <button>Order for delivery</button>
        </div>

        <div className='special-card'>
          <img src={dessert} alt='dessert' />
          <div className='name_price'>
            <h2>Lemon Dessert</h2>
            <p>$5.00</p>
          </div>
          <p>This comes straight from grandma's receipe book</p>
          <button>Order for delivery</button>
        </div>
      </section>
    </section>
  )
}

export default Specials