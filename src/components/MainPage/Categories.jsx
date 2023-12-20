import React from "react"
import { Link } from 'react-router-dom';


const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/shirt.png",
      cateName: "Shirts",
    },
    {
      cateImg: "./images/category/t-shirt.png",
      cateName: "T-Shirts",
    },
    {
      cateImg: "./images/category/shoes.png",
      cateName: "Shoes",
    },
    {
      cateImg: "./images/category/pants.png",
      cateName: "Pants & Chinos",
    },
    {
      cateImg: "./images/category/jacket.png",
      cateName: "Jackets & Coats",
    },
    {
      cateImg: "./images/category/suit.png",
      cateName: "Suits",
    },
    {
      cateImg: "./images/category/jumper.png",
      cateName: "Jumpers & Cardigans",
    },
    {
      cateImg: "./images/category/cargo.png",
      cateName: "Cargo pants",
    },
    {
      cateImg: "./images/category/designer.png",
      cateName: "Designer clothing",
    },
    {
      cateImg: "./images/category/plus.png",
      cateName: "Plus Size",
    },
    {
      cateImg: "./images/category/accessories.png",
      cateName: "Accessories",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <Link to={`/category/${value.cateName}`}>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
