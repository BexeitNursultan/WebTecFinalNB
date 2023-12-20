import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>NBShop</h1>
             <p>"Welcome to our clothing store! We've been curating style since 2003, bringing you the latest trends and timeless classics. Explore our collections and dress your best with us."</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate</li>
              <li>Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Auezov street, Almaty, AY 77531, Kazakhstan </li>
              <li>Email: bekseit.03@gmail.com</li>
              <li>Phone: +7 747 840 60 80</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
