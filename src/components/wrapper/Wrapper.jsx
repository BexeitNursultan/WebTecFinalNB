import React from "react"
import "./wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "At NBStore, we're excited to bring our exclusive collection of men's fashion to style enthusiasts around the globe! With our worldwide delivery service, the latest trends and timeless classics are now just a click away, no matter where you are. ",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "Your security and convenience are our top priorities. That's why we offer a range of safe and secure payment methods for a worry-free shopping experience. Whether you're paying via credit card, PayPal, or through direct bank transfer, rest assured that your financial information is protected with the latest encryption technology.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "Our commitment to quality, authenticity, and customer satisfaction ensures that every piece you purchase is not just a transaction, but a pledge of excellence.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We at NBStore understand that questions and needs can arise at any hour. That's why we're proud to offer 24/7 customer support. Whether it's a query about our collection, assistance with an order, or post-purchase support, our dedicated team is always available to provide you with timely and helpful solutions.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
