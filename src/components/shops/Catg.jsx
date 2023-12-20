import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/Giorgio-Armani-Logo.png",
      cateName: "Giorgio Armani",
    },
    {
      cateImg: "./images/category/Hugo-Boss.png",
      cateName: "Hugo Boss",
    },
    {
      cateImg: "./images/category/Original_Adidas_logo.png",
      cateName: "Adidas",
    },
    {
      cateImg: "./images/category/nike-logo.png",
      cateName: "Nike",
    },
    {
      cateImg: "./images/category/Zara.png",
      cateName: "ZARA",
    },
    {
      cateImg: "./images/category/CK.png",
      cateName: "Calvin Klein",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
